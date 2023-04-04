import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import abis from './utils/abis'
import BigNumber from 'bignumber.js'

import PoolInfo from './components/PoolInfo'
import MarketsInfo from './components/MarketsInfo'
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
const MAX = '0XFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'

function nn(value, unit = 'ether') {
    return value ? Web3.utils.fromWei(value.toString(), unit) : undefined
}

function bb(value, unit = 'ether') {
    return value ? Web3.utils.toWei(value.toString(), unit) : undefined
}
var base64DecodeChars = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));

var base64decode = function (e) {
    var r, a, c, h, o, t, d;
    for (t = e.length, o = 0, d = ''; o < t;) {
        do r = base64DecodeChars[255 & e.charCodeAt(o++)];
        while (o < t && r == -1);
        if (r == -1) break;
        do a = base64DecodeChars[255 & e.charCodeAt(o++)];
        while (o < t && a == -1);
        if (a == -1) break;
        d += String.fromCharCode(r << 2 | (48 & a) >> 4);
        do {
            if (c = 255 & e.charCodeAt(o++), 61 == c) return d;
            c = base64DecodeChars[c]
        } while (o < t && c == -1);
        if (c == -1) break;
        d += String.fromCharCode((15 & a) << 4 | (60 & c) >> 2);
        do {
            if (h = 255 & e.charCodeAt(o++), 61 == h) return d;
            h = base64DecodeChars[h]
        } while (o < t && h == -1);
        if (h == -1) break;
        d += String.fromCharCode((3 & c) << 6 | h)
    }
    return d
}


var base64ToHex = function (str) {
    for (var i = 0,
        bin = base64decode(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        var tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex.join("");
}

function getDateInTimezone(timezone = 'America/New_York') {
    const now = new Date();
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const dateTime = now.toLocaleString('en-US', options);
    return new Date(dateTime);
}



function isForexMarketOpen() {
    const etDate = getDateInTimezone();

    // 判断是否在周日18:00到周五17:00之间
    const dayOfWeek = etDate.getDay();
    const hourOfDay = etDate.getHours();

    if (dayOfWeek === 0) {
        // 周日18:00以后开市
        return hourOfDay >= 18;
    } else if (dayOfWeek >= 1 && dayOfWeek <= 4) {
        // 周一到周四的17:00前开市
        return hourOfDay < 17 || hourOfDay >= 18;
    } else if (dayOfWeek === 5) {
        // 周五的17:00前开市
        return hourOfDay <= 17;
    } else {
        // 周六休市
        return false;
    }
}


function isStockMarketOpen() {
    const etDate = getDateInTimezone();
    const year = etDate.getFullYear();
    const month = etDate.getMonth();
    const day = etDate.getDate();
    const weekday = etDate.getDay();
    const hour = etDate.getHours();
    const minute = etDate.getMinutes();

    // Check if it's a weekend
    if (weekday === 0 || weekday === 6) {
        return false;
    }

    // Check if it's a holiday
    const holidays = [
        // New Year's Day
        new Date(year, 0, 1),
        // Martin Luther King Jr. Day
        new Date(year, 0, 1 + (1 - new Date(year, 0, 1).getDay()) + 14),
        // Washington's Birthday
        new Date(year, 1, 1 + (1 - new Date(year, 1, 1).getDay()) + 14),
        // Good Friday
        new Date(year, month, day - 2 - ((new Date(year, month, 1).getDay() + 6) % 7)),
        // Memorial Day
        new Date(year, 4, 1 + (1 - new Date(year, 4, 1).getDay()) + 21),
        // Independence Day
        new Date(year, 6, 4),
        // Labor Day
        new Date(year, 8, 1 + (1 - new Date(year, 8, 1).getDay()) + 7),
        // Thanksgiving Day
        new Date(year, 10, 1 + (4 - new Date(year, 10, 1).getDay())),
        // Christmas Day
        new Date(year, 11, 25),
        // New Year's Eve (early market close)
        new Date(year, 11, 31)
    ];

    // Special cases where the market closes early
    const blackFriday = new Date(year, 10, 1 + (5 - new Date(year, 10, 1).getDay()));
    const thanksgiving = new Date(year, 10, 1 + (4 - new Date(year, 10, 1).getDay()));

    if (month === blackFriday.getMonth() && day === blackFriday.getDate()) {
        if (hour >= 13) {
            return false;
        }
    }

    if (month === thanksgiving.getMonth() && day === thanksgiving.getDate()) {
        if (hour >= 13) {
            return false;
        }
    }

    for (let i = 0; i < holidays.length; i++) {
        if (holidays[i].getMonth() === month && holidays[i].getDate() === day) {
            return false;
        }
    }

    // Check if it's outside regular trading hours
    if (hour < 9 || (hour === 9 && minute < 30) || hour >= 16) {
        return false;
    }

    return true;
}


function toAmount(value, decimals) {
    if (decimals === '18') {
        return Web3.utils.toWei(value.toString(), "ether")
    }
    return value ? new BigNumber(value).times(new BigNumber(10 ** decimals)).toString() : undefined
}

const symbols = [
    {
        "symbol": "GBPUSD",
        "type": "forex",
        "ids": "0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1"
    },
    {
        "symbol": "EURUSD",
        "type": "forex",
        "ids": "0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b"
    },
    {
        "symbol": "XAUUSD",
        "type": "forex",
        "ids": "0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2"
    },
    {
        "symbol": "XAGUSD",
        "type": "forex",
        "ids": "0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e"
    },
    {
        "symbol": "QQQUSD",
        "type": "stock",
        "ids": "0x9695e2b96ea7b3859da9ed25b7a46a920a776e2fdae19a7bcfdf2b219230452d"
    },
    {
        "symbol": "SPYUSD",
        "type": "stock",
        "ids": "0x19e09bb805456ada3979a7d1cbb4b6d63babc3a0f8e8a9509f68afa5c4c11cd5"
    },
    {
        "symbol": "AAPLUSD",
        "type": "stock",
        "ids": "0x49f6b65cb1de6b10eaf75e7c03ca029c306d0357e91b5311b175084a5ad55688"
    },
    {
        "symbol": "AMCUSD",
        "type": "stock",
        "ids": "0x5b1703d7eb9dc8662a61556a2ca2f9861747c3fc803e01ba5a8ce35cb50a13a1"
    },
    {
        "symbol": "GOOGUSD",
        "type": "stock",
        "ids": "0xe65ff435be42630439c96396653a342829e877e2aafaeaf1a10d0ee5fd2cf3f2"
    },
    {
        "symbol": "GMEUSD",
        "type": "stock",
        "ids": "0x6f9cd89ef1b7fd39f667101a91ad578b6c6ace4579d5f7f285a4b06aa4504be6"
    },
    {
        "symbol": "MSFTUSD",
        "type": "stock",
        "ids": "0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1"
    },
    {
        "symbol": "GSUSD",
        "type": "stock",
        "ids": "0x9c68c0c6999765cf6e27adf75ed551b34403126d3b0d5b686a2addb147ed4554"
    },
    {
        "symbol": "IBMUSD",
        "type": "stock",
        "ids": "0xcfd44471407f4da89d469242546bb56f5c626d5bef9bd8b9327783065b43c3ef"
    },
    {
        "symbol": "TSLAUSD",
        "type": "stock",
        "ids": "0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1"
    },
    {
        "symbol": "NFLXUSD",
        "type": "stock",
        "ids": "0x8376cfd7ca8bcdf372ced05307b24dced1f15b1afafdeff715664598f15a3dd2"
    },
    {
        "symbol": "NKEUSD",
        "type": "stock",
        "ids": "0x67649450b4ca4bfff97cbaf96d2fd9e40f6db148cb65999140154415e4378e14"
    },
    {
        "symbol": "INTCUSD",
        "type": "stock",
        "ids": "0xc1751e085ee292b8b3b9dd122a135614485a201c35dfc653553f0e28c1baf3ff"
    },
    {
        "symbol": "WMTUSD",
        "type": "stock",
        "ids": "0x327ae981719058e6fb44e132fb4adbf1bd5978b43db0661bfdaefd9bea0c82dc"
    }
]

function App() {

    const web3 = new Web3(window.ethereum)

    const pools = {
        futures: '0xdE57c591de8B3675C43fB955725b62e742b1c0B4',
    }

    const lens = new web3.eth.Contract(abis.DeriLens, '0x74F8acC86D93052557752E9D0B0c7b89b53ef100')

    const [data, setData] = useState({
        account: ZERO_ADDRESS,
        poolId: 'futures',
        market: 'USDC',
        symbol: 'BTCUSD',
        poolInfo: {},
        marketsInfo: {},
        symbolsInfo: {},
        userInfo: {},
    })

    useEffect(async () => {
        const account = await getAccount()
        const info = await getInfo('futures', account)
        const symbol = Object.keys(info.symbolsInfo)[0]
        setData({ ...data, account, symbol, ...info })
    }, [])

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const update = async (poolId, account) => {
        let symbol = poolId ? null : data.symbol
        poolId = poolId || data.poolId || 'futures'
        account = account || data.account || ZERO_ADDRESS
        if (poolId !== data.poolId) {
            setData({
                ...data,
                account: ZERO_ADDRESS,
                poolId: poolId,
                market: 'USDC',
                symbol: 'BTCUSD',
                poolInfo: {},
                marketsInfo: {},
                symbolsInfo: {},
                userInfo: {},
            })
        }
        const info = await getInfo(poolId, account)
        symbol = symbol || Object.keys(info.symbolsInfo)[0]
        setData({ ...data, poolId, account, symbol, ...info })
    }

    const getContract = (abiname, address) => {
        return new web3.eth.Contract(abis[abiname], address)
    }

    const getAccount = async () => {
        return Web3.utils.toChecksumAddress((await window.ethereum.request({ method: 'eth_requestAccounts' }))[0])
    }

    const getInfo = async (poolId, account) => {
        const info = await lens.methods.getInfo(pools[poolId], account, []).call()
        const tokenB0 = getContract('ERC20', info.poolInfo.tokenB0)

        const poolInfo = {}
        poolInfo.pool = info.poolInfo.pool
        poolInfo.reservedB0 = nn(await tokenB0.methods.balanceOf(info.poolInfo.pool).call())
        poolInfo.liquidity = nn(info.poolInfo.liquidity)
        poolInfo.lpsPnl = nn(info.poolInfo.lpsPnl)
        poolInfo.cumulativePnlPerLiquidity = nn(info.poolInfo.cumulativePnlPerLiquidity)
        poolInfo.protocolFeeAccrued = nn(info.poolInfo.protocolFeeAccrued)
        poolInfo.initialMarginRequired = nn(info.poolInfo.initialMarginRequired)

        const marketsInfo = {}
        for (let m of info.marketsInfo) {
            const mm = {}
            const bToken = getContract('ERC20', m.underlying)
            mm.decimals = await bToken.methods.decimals().call()
            mm.bSymbol = m.underlyingSymbol === 'WBNB' ? 'BNB' : m.underlyingSymbol
            mm.vSymbol = m.vTokenSymbol
            mm.bAddress = m.underlying
            mm.vAddress = m.vToken
            mm.price = nn(m.underlyingPrice)
            mm.approved = nn(await bToken.methods.allowance(account, pools[poolId]).call()) > 0
            mm.decimals = await bToken.methods.decimals().call()
            mm.balance = await bToken.methods.balanceOf(account).call() / 10 ** await bToken.methods.decimals().call()
            marketsInfo[mm.bSymbol] = mm
        }
        for (let m of info.lpInfo.markets) {
            const bSymbol = m.underlyingSymbol === 'WBNB' ? 'BNB' : m.underlyingSymbol
            marketsInfo[bSymbol].balanceLp = nn(m.vTokenBalance) * nn(m.exchangeRate)
        }
        for (let m of info.tdInfo.markets) {
            const bSymbol = m.underlyingSymbol === 'WBNB' ? 'BNB' : m.underlyingSymbol
            marketsInfo[bSymbol].balanceTd = nn(m.vTokenBalance) * nn(m.exchangeRate)
        }

        const symbolsInfo = {}
        for (let s of info.symbolsInfo) {
            const ss = {}
            ss.symbol = s.symbol
            ss.alpha = nn(s.alpha)
            ss.fundingPeriod = `${parseInt(s.fundingPeriod / 86400)} days`
            ss.minTradeVolume = nn(s.minTradeVolume)
            ss.netVolume = nn(s.netVolume)
            ss.netCost = nn(s.netCost)
            ss.indexPrice = nn(s.indexPrice)
            ss.fundingTimestamp = s.fundingTimestamp
            ss.cumulativeFundingPerVolume = nn(s.cumulativeFundingPerVolume)
            ss.tradersPnl = nn(s.tradersPnl)
            ss.initialMarginRequired = nn(s.initialMarginRequired)
            ss.nPositionHolders = s.nPositionHolders
            ss.curIndexPrice = nn(s.curIndexPrice)
            ss.curVolatility = nn(s.curVolatility)
            ss.curCumulativeFundingPerVolume = nn(s.curCumulativeFundingPerVolume)
            ss.K = nn(s.K)
            ss.markPrice = nn(s.markPrice)
            ss.funding = nn(s.funding)
            ss.timeValue = nn(s.timeValue)
            ss.delta = nn(s.delta)
            ss.u = nn(s.u)
            ss.userVolume = null
            ss.userCost = null
            ss.userCumulativeFundingPerVolume = null
            symbolsInfo[ss.symbol] = ss
        }
        for (let p of info.tdInfo.positions) {
            symbolsInfo[p.symbol].userVolume = nn(p.volume)
            symbolsInfo[p.symbol].userCost = nn(p.cost)
            symbolsInfo[p.symbol].userCumulativeFundingPerVolume = nn(p.cumulativeFundingPerVolume)
        }

        const userInfo = {}
        userInfo.lTokenId = info.lpInfo.lTokenId
        userInfo.lpAmountB0 = nn(info.lpInfo.amountB0)
        userInfo.lpVaultLiquidity = nn(info.lpInfo.vaultLiquidity)
        userInfo.liquidity = nn(info.lpInfo.liquidity)
        userInfo.pTokenId = info.tdInfo.pTokenId
        userInfo.tdAmountB0 = nn(info.tdInfo.amountB0)
        userInfo.tdVaultLiquidity = nn(info.tdInfo.vaultLiquidity)
        userInfo.margin = parseFloat(userInfo.tdAmountB0) + parseFloat(userInfo.tdVaultLiquidity)

        return {
            poolInfo,
            marketsInfo,
            symbolsInfo,
            userInfo,
        }
    }

    const getOracleSignatures = async () => {
        const signatures = []
        const vaas = []
        const ids = []
        const urls = [
            {
                ids: "0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1',
            },
            {
                ids: "0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52',
            },
            {
                ids: "0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b',
            },
            {
                ids: "0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2',
            },
            {
                ids: "0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e',
            },
            {
                ids: "0x9695e2b96ea7b3859da9ed25b7a46a920a776e2fdae19a7bcfdf2b219230452d",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x9695e2b96ea7b3859da9ed25b7a46a920a776e2fdae19a7bcfdf2b219230452d',
            },
            {
                ids: "0x19e09bb805456ada3979a7d1cbb4b6d63babc3a0f8e8a9509f68afa5c4c11cd5",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x19e09bb805456ada3979a7d1cbb4b6d63babc3a0f8e8a9509f68afa5c4c11cd5',
            },
            {
                ids: "0x49f6b65cb1de6b10eaf75e7c03ca029c306d0357e91b5311b175084a5ad55688",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x49f6b65cb1de6b10eaf75e7c03ca029c306d0357e91b5311b175084a5ad55688',
            },
            {
                ids: "0x5b1703d7eb9dc8662a61556a2ca2f9861747c3fc803e01ba5a8ce35cb50a13a1",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x5b1703d7eb9dc8662a61556a2ca2f9861747c3fc803e01ba5a8ce35cb50a13a1',
            },
            {
                ids: "0xe65ff435be42630439c96396653a342829e877e2aafaeaf1a10d0ee5fd2cf3f2",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xe65ff435be42630439c96396653a342829e877e2aafaeaf1a10d0ee5fd2cf3f2',
            },
            {
                ids: "0x6f9cd89ef1b7fd39f667101a91ad578b6c6ace4579d5f7f285a4b06aa4504be6",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x6f9cd89ef1b7fd39f667101a91ad578b6c6ace4579d5f7f285a4b06aa4504be6',
            },
            {
                ids: "0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1',
            },
            {
                ids: "0x9c68c0c6999765cf6e27adf75ed551b34403126d3b0d5b686a2addb147ed4554",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x9c68c0c6999765cf6e27adf75ed551b34403126d3b0d5b686a2addb147ed4554',
            },
            {
                ids: "0xcfd44471407f4da89d469242546bb56f5c626d5bef9bd8b9327783065b43c3ef",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xcfd44471407f4da89d469242546bb56f5c626d5bef9bd8b9327783065b43c3ef',
            },
            {
                ids: "0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1',
            },
            {
                ids: "0x8376cfd7ca8bcdf372ced05307b24dced1f15b1afafdeff715664598f15a3dd2",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x8376cfd7ca8bcdf372ced05307b24dced1f15b1afafdeff715664598f15a3dd2',
            },
            {
                ids: "0x67649450b4ca4bfff97cbaf96d2fd9e40f6db148cb65999140154415e4378e14",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x67649450b4ca4bfff97cbaf96d2fd9e40f6db148cb65999140154415e4378e14',
            },
            {
                ids: "0xc1751e085ee292b8b3b9dd122a135614485a201c35dfc653553f0e28c1baf3ff",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0xc1751e085ee292b8b3b9dd122a135614485a201c35dfc653553f0e28c1baf3ff',
            },
            {
                ids: "0x327ae981719058e6fb44e132fb4adbf1bd5978b43db0661bfdaefd9bea0c82dc",
                url: 'https://xc-mainnet.pyth.network/api/latest_vaas?ids[]=0x327ae981719058e6fb44e132fb4adbf1bd5978b43db0661bfdaefd9bea0c82dc',
            },
        ]
        let isForex = isForexMarketOpen()
        let isStock = isStockMarketOpen()
        console.log(isForex, isStock)
        let forex = isForex ? symbols.filter(item => item.type === "forex") : []
        let stock = isStock ? symbols.filter(item => item.type === "stock") : []
        console.log(forex, stock)
        let sendUrls = forex.concat(stock)
        if (sendUrls.length) {
            let url = sendUrls.map(item => {
                return urls.filter(items => items.ids === item.ids)[0]
            })
            console.log("sigurl", url)
            await Promise.all(url.map(async (item) => {
                const res = await fetch(item.url)
                const sig = await res.json()
                let vaasBet = base64ToHex(sig[0])
                vaas.push(`0x${vaasBet}`)
                ids.push(item.ids)
            }))
            signatures[0] = vaas
            signatures[1] = ids
            console.log("signatures", signatures)
        }
        return signatures
    }

    const onChangePoolId = async (poolId) => {
        await update(poolId)
    }

    const onChangeMarket = async (market) => {
        setData({ ...data, market })
    }

    const onChangeSymbol = async (symbol) => {
        setData({ ...data, symbol })
    }

    const onMint = async (bSymbol) => {
        const mintAmounts = {
            USDC: 10000,
            USDT: 10000,
            DAI: 10000,
            LINK: 10000,
            WETH: 0.1,
            WBTC: 0.5,
        }
        const token = await new web3.eth.Contract(abis.TokenVault, data.marketsInfo[bSymbol].bAddress)
        console.log(toAmount(mintAmounts[bSymbol], data.marketsInfo[bSymbol].decimals))
        await token.methods["mint(address,uint256)"](data.account, toAmount(mintAmounts[bSymbol], data.marketsInfo[bSymbol].decimals)).send({ from: data.account })
        // await token.methods.mint(data.account, mintAmounts[bSymbol] * (10 ** data.marketsInfo[bSymbol].decimals)).send({ from: data.account })
        await update()
    }

    const onApprove = async (bSymbol) => {
        await getContract('ERC20', data.marketsInfo[bSymbol].bAddress).methods.approve(pools[data.poolId], MAX).send({ from: data.account })
        await update()
    }

    const onAddLiquidity = async (bSymbol, amount) => {
        const pool = getContract('PoolImplementation', "0xdE57c591de8B3675C43fB955725b62e742b1c0B4")
        console.log(data.marketsInfo[bSymbol].bAddress, toAmount(amount, data.marketsInfo[bSymbol].decimals), await getOracleSignatures())
        let signatures = await getOracleSignatures()
        let valueLength = signatures[0].length ? signatures[0].length : 20
        await pool.methods.addLiquidity(
            data.marketsInfo[bSymbol].bAddress, toAmount(amount, data.marketsInfo[bSymbol].decimals), signatures
        ).send({ from: data.account, value: valueLength })

        await update()
    }

    const onRemoveLiquidity = async (bSymbol, amount) => {
        const pool = getContract('PoolImplementation', "0xdE57c591de8B3675C43fB955725b62e742b1c0B4")
        let signatures = await getOracleSignatures()
        let valueLength = signatures[0].length ? signatures[0].length : 20
        await pool.methods.removeLiquidity(
            data.marketsInfo[bSymbol].bAddress, toAmount(amount, data.marketsInfo[bSymbol].decimals), signatures
        ).send({ from: data.account, value: valueLength })
        await update()
    }

    const onAddMargin = async (bSymbol, amount) => {
        const pool = getContract('PoolImplementation', pools[data.poolId])
        if (bSymbol === 'BNB') {
            await pool.methods.addMargin(
                ZERO_ADDRESS, 0, []
            ).send({ from: data.account, value: bb(amount) })
        } else {
            await pool.methods.addMargin(
                data.marketsInfo[bSymbol].bAddress, bb(amount), []
            ).send({ from: data.account })
        }
        await update()
    }

    const onRemoveMargin = async (bSymbol, amount) => {
        const pool = getContract('PoolImplementation', pools[data.poolId])
        if (bSymbol === 'BNB') {
            await pool.methods.removeMargin(
                ZERO_ADDRESS, bb(amount), await getOracleSignatures(data.poolId)
            ).send({ from: data.account })
        } else {
            await pool.methods.removeMargin(
                data.marketsInfo[bSymbol].bAddress, bb(amount), await getOracleSignatures(data.poolId)
            ).send({ from: data.account })
        }
        await update()
    }

    const onTrade = async (symbol, amount, priceLimit) => {
        const pool = getContract('PoolImplementation', pools[data.poolId])
        await pool.methods.trade(symbol, bb(amount), bb(priceLimit), await getOracleSignatures(data.poolId)).send({ from: data.account })
        await update()
    }

    const onLiquidate = async (address) => {
        const pool = getContract('PoolImplementation', pools[data.poolId])
        const pToken = getContract('DToken', await pool.methods.pToken().call())
        const pTokenId = await pToken.methods.getTokenIdOf(address).call()
        if (pTokenId != 0) {
            await pool.methods.liquidate(pTokenId, await getOracleSignatures(data.poolId)).send({ from: data.account })
        }
        await update()
    }


    return (
        <div className="App">
            <h1>Arbitrum </h1>
            <br />
            <PoolInfo poolId={data.poolId} poolIds={Object.keys(pools)} poolInfo={data.poolInfo} onChangePoolId={onChangePoolId} />
            <br />
            {/* <UserInfo userInfo={data.userInfo} /> */}
            <br />
            <MarketsInfo market={data.market} marketsInfo={data.marketsInfo} data={data} useInfo={data.userInfo} onChangeMarket={onChangeMarket} onMint={onMint} onApprove={onApprove} onAddLiquidity={onAddLiquidity} onRemoveLiquidity={onRemoveLiquidity} onAddMargin={onAddMargin} onRemoveMargin={onRemoveMargin} />
            <br />
            {/* <SymbolsInfo symbol={data.symbol} symbolsInfo={data.symbolsInfo} onChangeSymbol={onChangeSymbol} onTrade={onTrade} /> */}
            <br />
            {/* <OtherInfo xvsBalance={data.xvsBalance} onLiquidate={onLiquidate} onClaimXVSLp={onClaimXVSLp} onClaimXVSTd={onClaimXVSTd} /> */}
            <br />
            {/* <Decoder /> */}
        </div>
    )

}

export default App
