const ERC20 = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint8", "name": "_decimals", "type": "uint8" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]

const PoolImplementation = [
    {
        "inputs": [
            {
                "internalType": "address[13]",
                "name": "addresses_",
                "type": "address[13]"
            },
            {
                "internalType": "uint256[7]",
                "name": "parameters_",
                "type": "uint256[7]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "lTokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "newLiquidity",
                "type": "int256"
            }
        ],
        "name": "AddLiquidity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "pTokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "newMargin",
                "type": "int256"
            }
        ],
        "name": "AddMargin",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "market",
                "type": "address"
            }
        ],
        "name": "AddMarket",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "collector",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "CollectProtocolFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "NewAdmin",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "NewImplementation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "newProtocolFeeCollector",
                "type": "address"
            }
        ],
        "name": "NewProtocolFeeCollector",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "lTokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "newLiquidity",
                "type": "int256"
            }
        ],
        "name": "RemoveLiquidity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "pTokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "newMargin",
                "type": "int256"
            }
        ],
        "name": "RemoveMargin",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "router",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "name": "SetRouter",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes[]",
                        "name": "vaas",
                        "type": "bytes[]"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    }
                ],
                "internalType": "struct PoolImplementation.PythData",
                "name": "pythData",
                "type": "tuple"
            }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes[]",
                        "name": "vaas",
                        "type": "bytes[]"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    }
                ],
                "internalType": "struct PoolImplementation.PythData",
                "name": "pythData",
                "type": "tuple"
            }
        ],
        "name": "addMargin",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "market",
                "type": "address"
            }
        ],
        "name": "addMarket",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            }
        ],
        "name": "approveSwapper",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "reward",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "claimStakedAaveLp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "reward",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "claimStakedAaveTrader",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "collectProtocolFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cumulativePnlPerLiquidity",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimalsB0",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "implementation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isRouter",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lToken",
        "outputs": [
            {
                "internalType": "contract IDToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pTokenId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes[]",
                        "name": "vaas",
                        "type": "bytes[]"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    }
                ],
                "internalType": "struct PoolImplementation.PythData",
                "name": "pythData",
                "type": "tuple"
            }
        ],
        "name": "liquidate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "liquidationRewardCutRatio",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "liquidity",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "lpInfos",
        "outputs": [
            {
                "internalType": "address",
                "name": "vault",
                "type": "address"
            },
            {
                "internalType": "int256",
                "name": "amountB0",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "liquidity",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "cumulativePnlPerLiquidity",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lpsPnl",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketB0",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketWETH",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "markets",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxLiquidationReward",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minLiquidationReward",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minRatioB0",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nameId",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "oracleManager",
        "outputs": [
            {
                "internalType": "contract IOracleManagerPyth",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pToken",
        "outputs": [
            {
                "internalType": "contract IDToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "poolInitialMarginMultiplier",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "privileger",
        "outputs": [
            {
                "internalType": "contract IPrivileger",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "protocolFeeAccrued",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "protocolFeeCollectRatio",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "protocolFeeCollector",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes[]",
                        "name": "vaas",
                        "type": "bytes[]"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    }
                ],
                "internalType": "struct PoolImplementation.PythData",
                "name": "pythData",
                "type": "tuple"
            }
        ],
        "name": "removeLiquidity",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes[]",
                        "name": "vaas",
                        "type": "bytes[]"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    }
                ],
                "internalType": "struct PoolImplementation.PythData",
                "name": "pythData",
                "type": "tuple"
            }
        ],
        "name": "removeMargin",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "reserveRatioB0",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardVault",
        "outputs": [
            {
                "internalType": "contract IRewardVault",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "setAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "router_",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "name": "setRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapper",
        "outputs": [
            {
                "internalType": "contract ISwapper",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbolManager",
        "outputs": [
            {
                "internalType": "contract ISymbolManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tdInfos",
        "outputs": [
            {
                "internalType": "address",
                "name": "vault",
                "type": "address"
            },
            {
                "internalType": "int256",
                "name": "amountB0",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenB0",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenWETH",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "symbolName",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "tradeVolume",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "priceLimit",
                "type": "int256"
            }
        ],
        "name": "trade",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vaultImplementation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vaultTemplate",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "versionId",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

const SymbolImplementationFutures = [{ "inputs": [{ "internalType": "address", "name": "manager_", "type": "address" }, { "internalType": "address", "name": "oracleManager_", "type": "address" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "int256[9]", "name": "parameters_", "type": "int256[9]" }, { "internalType": "bool", "name": "isCloseOnly_", "type": "bool" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "NewAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newImplementation", "type": "address" }], "name": "NewImplementation", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "alpha", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cumulativeFundingPerVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeRatio", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fundingPeriod", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fundingTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }], "name": "hasPosition", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "implementation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "indexPrice", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialMarginRatio", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialMarginRequired", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isCloseOnly", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastNetVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastNetVolumeBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maintenanceMarginRatio", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "manager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minTradeVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nPositionHolders", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nameId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "netCost", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "netVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "oracleManager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "positions", "outputs": [{ "internalType": "int256", "name": "volume", "type": "int256" }, { "internalType": "int256", "name": "cost", "type": "int256" }, { "internalType": "int256", "name": "cumulativeFundingPerVolume", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pricePercentThreshold", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "setAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "int256", "name": "liquidity", "type": "int256" }], "name": "settleOnAddLiquidity", "outputs": [{ "components": [{ "internalType": "bool", "name": "settled", "type": "bool" }, { "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnAddLiquidity", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }], "name": "settleOnLiquidate", "outputs": [{ "components": [{ "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "int256", "name": "traderFunding", "type": "int256" }, { "internalType": "int256", "name": "traderPnl", "type": "int256" }, { "internalType": "int256", "name": "traderMaintenanceMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "tradeVolume", "type": "int256" }, { "internalType": "int256", "name": "tradeCost", "type": "int256" }, { "internalType": "int256", "name": "tradeRealizedCost", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnLiquidate", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "removedLiquidity", "type": "int256" }], "name": "settleOnRemoveLiquidity", "outputs": [{ "components": [{ "internalType": "bool", "name": "settled", "type": "bool" }, { "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "removeLiquidityPenalty", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnRemoveLiquidity", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "int256", "name": "tradeVolume", "type": "int256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "priceLimit", "type": "int256" }], "name": "settleOnTrade", "outputs": [{ "components": [{ "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "int256", "name": "traderFunding", "type": "int256" }, { "internalType": "int256", "name": "traderPnl", "type": "int256" }, { "internalType": "int256", "name": "traderInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "tradeCost", "type": "int256" }, { "internalType": "int256", "name": "tradeFee", "type": "int256" }, { "internalType": "int256", "name": "tradeRealizedCost", "type": "int256" }, { "internalType": "int256", "name": "positionChangeStatus", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnTrade", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }], "name": "settleOnTraderWithPosition", "outputs": [{ "components": [{ "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "traderFunding", "type": "int256" }, { "internalType": "int256", "name": "traderPnl", "type": "int256" }, { "internalType": "int256", "name": "traderInitialMarginRequired", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnTraderWithPosition", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startingPriceShiftLimit", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbolId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "timeThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tradersPnl", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "versionId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }]

const SymbolImplementationOption = [{ "inputs": [{ "internalType": "address", "name": "manager_", "type": "address" }, { "internalType": "address", "name": "oracleManager_", "type": "address" }, { "internalType": "string[3]", "name": "symbols_", "type": "string[3]" }, { "internalType": "int256[12]", "name": "parameters_", "type": "int256[12]" }, { "internalType": "bool[2]", "name": "boolParameters_", "type": "bool[2]" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "NewAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newImplementation", "type": "address" }], "name": "NewImplementation", "type": "event" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "alpha", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cumulativeFundingPerVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeRatioITM", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeRatioOTM", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fundingPeriod", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fundingTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }], "name": "hasPosition", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "implementation", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "indexPrice", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialMarginRatio", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialMarginRequired", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isCloseOnly", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastNetVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastNetVolumeBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maintenanceMarginRatio", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "manager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minInitialMarginRatio", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minTradeVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nPositionHolders", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nameId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "netCost", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "netVolume", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "oracleManager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "positions", "outputs": [{ "internalType": "int256", "name": "volume", "type": "int256" }, { "internalType": "int256", "name": "cost", "type": "int256" }, { "internalType": "int256", "name": "cumulativeFundingPerVolume", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "priceId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pricePercentThreshold", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "setAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "int256", "name": "liquidity", "type": "int256" }], "name": "settleOnAddLiquidity", "outputs": [{ "components": [{ "internalType": "bool", "name": "settled", "type": "bool" }, { "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnAddLiquidity", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }], "name": "settleOnLiquidate", "outputs": [{ "components": [{ "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "int256", "name": "traderFunding", "type": "int256" }, { "internalType": "int256", "name": "traderPnl", "type": "int256" }, { "internalType": "int256", "name": "traderMaintenanceMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "tradeVolume", "type": "int256" }, { "internalType": "int256", "name": "tradeCost", "type": "int256" }, { "internalType": "int256", "name": "tradeRealizedCost", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnLiquidate", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "removedLiquidity", "type": "int256" }], "name": "settleOnRemoveLiquidity", "outputs": [{ "components": [{ "internalType": "bool", "name": "settled", "type": "bool" }, { "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "removeLiquidityPenalty", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnRemoveLiquidity", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "int256", "name": "tradeVolume", "type": "int256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "priceLimit", "type": "int256" }], "name": "settleOnTrade", "outputs": [{ "components": [{ "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "int256", "name": "traderFunding", "type": "int256" }, { "internalType": "int256", "name": "traderPnl", "type": "int256" }, { "internalType": "int256", "name": "traderInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "tradeCost", "type": "int256" }, { "internalType": "int256", "name": "tradeFee", "type": "int256" }, { "internalType": "int256", "name": "tradeRealizedCost", "type": "int256" }, { "internalType": "int256", "name": "positionChangeStatus", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnTrade", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }], "name": "settleOnTraderWithPosition", "outputs": [{ "components": [{ "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "deltaTradersPnl", "type": "int256" }, { "internalType": "int256", "name": "deltaInitialMarginRequired", "type": "int256" }, { "internalType": "int256", "name": "traderFunding", "type": "int256" }, { "internalType": "int256", "name": "traderPnl", "type": "int256" }, { "internalType": "int256", "name": "traderInitialMarginRequired", "type": "int256" }], "internalType": "struct ISymbol.SettlementOnTraderWithPosition", "name": "s", "type": "tuple" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startingPriceShiftLimit", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "strikePrice", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbolId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "timeThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tradersPnl", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "versionId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "volatilityId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }]

const DToken = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "pool_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "exists", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "exists", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getOwnerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "getTokenIdOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalMinted", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const VaultImplementation = [{ "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }, { "internalType": "address", "name": "comptroller_", "type": "address" }, { "internalType": "address", "name": "vTokenETH_", "type": "address" }, { "internalType": "uint256", "name": "vaultLiquidityMultiplier_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "claimVenus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "comptroller", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }], "name": "enterMarket", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }], "name": "exitMarket", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }], "name": "getBalances", "outputs": [{ "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }, { "internalType": "uint256", "name": "underlyingBalance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vTokenModify", "type": "address" }, { "internalType": "uint256", "name": "redeemVTokens", "type": "uint256" }], "name": "getHypotheticalVaultLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMarketsIn", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVaultLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }], "name": "isInMarket", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "nameId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pool", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }], "name": "redeemAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "redeemUnderlying", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenXVS", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "transferAll", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "vTokenETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "vaultLiquidityMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "versionId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }]

const VBNB = [{ "inputs": [{ "internalType": "contract ComptrollerInterface", "name": "comptroller_", "type": "address" }, { "internalType": "contract InterestRateModel", "name": "interestRateModel_", "type": "address" }, { "internalType": "uint256", "name": "initialExchangeRateMantissa_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }, { "internalType": "address payable", "name": "admin_", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cashPrior", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "interestAccumulated", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "borrowIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalBorrows", "type": "uint256" }], "name": "AccrueInterest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "borrowAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accountBorrows", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalBorrows", "type": "uint256" }], "name": "Borrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "error", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "info", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "detail", "type": "uint256" }], "name": "Failure", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "liquidator", "type": "address" }, { "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "repayAmount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "vTokenCollateral", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "seizeTokens", "type": "uint256" }], "name": "LiquidateBorrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "mintAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mintTokens", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "mintAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mintTokens", "type": "uint256" }], "name": "MintBehalf", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "NewAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract ComptrollerInterface", "name": "oldComptroller", "type": "address" }, { "indexed": false, "internalType": "contract ComptrollerInterface", "name": "newComptroller", "type": "address" }], "name": "NewComptroller", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract InterestRateModel", "name": "oldInterestRateModel", "type": "address" }, { "indexed": false, "internalType": "contract InterestRateModel", "name": "newInterestRateModel", "type": "address" }], "name": "NewMarketInterestRateModel", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldPendingAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newPendingAdmin", "type": "address" }], "name": "NewPendingAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldReserveFactorMantissa", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newReserveFactorMantissa", "type": "uint256" }], "name": "NewReserveFactor", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "redeemer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "redeemAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "redeemTokens", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "redeemer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "redeemTokens", "type": "uint256" }], "name": "RedeemFee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "repayAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accountBorrows", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalBorrows", "type": "uint256" }], "name": "RepayBorrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "benefactor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "addAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newTotalReserves", "type": "uint256" }], "name": "ReservesAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "admin", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reduceAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newTotalReserves", "type": "uint256" }], "name": "ReservesReduced", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": false, "inputs": [], "name": "_acceptAdmin", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "reduceAmount", "type": "uint256" }], "name": "_reduceReserves", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract ComptrollerInterface", "name": "newComptroller", "type": "address" }], "name": "_setComptroller", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract InterestRateModel", "name": "newInterestRateModel", "type": "address" }], "name": "_setInterestRateModel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address payable", "name": "newPendingAdmin", "type": "address" }], "name": "_setPendingAdmin", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "newReserveFactorMantissa", "type": "uint256" }], "name": "_setReserveFactor", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "accrualBlockNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "accrueInterest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOfUnderlying", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "borrowAmount", "type": "uint256" }], "name": "borrow", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "borrowBalanceCurrent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "borrowBalanceStored", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "borrowIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "borrowRatePerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "comptroller", "outputs": [{ "internalType": "contract ComptrollerInterface", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "exchangeRateCurrent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "exchangeRateStored", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getAccountSnapshot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCash", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract ComptrollerInterface", "name": "comptroller_", "type": "address" }, { "internalType": "contract InterestRateModel", "name": "interestRateModel_", "type": "address" }, { "internalType": "uint256", "name": "initialExchangeRateMantissa_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "interestRateModel", "outputs": [{ "internalType": "contract InterestRateModel", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isVToken", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "borrower", "type": "address" }, { "internalType": "contract VToken", "name": "vTokenCollateral", "type": "address" }], "name": "liquidateBorrow", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "mint", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pendingAdmin", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "redeemTokens", "type": "uint256" }], "name": "redeem", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "redeemAmount", "type": "uint256" }], "name": "redeemUnderlying", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "repayBorrow", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "borrower", "type": "address" }], "name": "repayBorrowBehalf", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "reserveFactorMantissa", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "liquidator", "type": "address" }, { "internalType": "address", "name": "borrower", "type": "address" }, { "internalType": "uint256", "name": "seizeTokens", "type": "uint256" }], "name": "seize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "supplyRatePerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalBorrows", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "totalBorrowsCurrent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalReserves", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]

const VBep20 = [{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cashPrior", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "interestAccumulated", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "borrowIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalBorrows", "type": "uint256" }], "name": "AccrueInterest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "borrowAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accountBorrows", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalBorrows", "type": "uint256" }], "name": "Borrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "error", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "info", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "detail", "type": "uint256" }], "name": "Failure", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "liquidator", "type": "address" }, { "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "repayAmount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "vTokenCollateral", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "seizeTokens", "type": "uint256" }], "name": "LiquidateBorrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "minter", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "mintAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mintTokens", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "mintAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mintTokens", "type": "uint256" }], "name": "MintBehalf", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "NewAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract ComptrollerInterface", "name": "oldComptroller", "type": "address" }, { "indexed": false, "internalType": "contract ComptrollerInterface", "name": "newComptroller", "type": "address" }], "name": "NewComptroller", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract InterestRateModel", "name": "oldInterestRateModel", "type": "address" }, { "indexed": false, "internalType": "contract InterestRateModel", "name": "newInterestRateModel", "type": "address" }], "name": "NewMarketInterestRateModel", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldPendingAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newPendingAdmin", "type": "address" }], "name": "NewPendingAdmin", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldReserveFactorMantissa", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newReserveFactorMantissa", "type": "uint256" }], "name": "NewReserveFactor", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "redeemer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "redeemAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "redeemTokens", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "redeemer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "redeemTokens", "type": "uint256" }], "name": "RedeemFee", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "payer", "type": "address" }, { "indexed": false, "internalType": "address", "name": "borrower", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "repayAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "accountBorrows", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalBorrows", "type": "uint256" }], "name": "RepayBorrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "benefactor", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "addAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newTotalReserves", "type": "uint256" }], "name": "ReservesAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "admin", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reduceAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newTotalReserves", "type": "uint256" }], "name": "ReservesReduced", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [], "name": "_acceptAdmin", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "addAmount", "type": "uint256" }], "name": "_addReserves", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "reduceAmount", "type": "uint256" }], "name": "_reduceReserves", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract ComptrollerInterface", "name": "newComptroller", "type": "address" }], "name": "_setComptroller", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract InterestRateModel", "name": "newInterestRateModel", "type": "address" }], "name": "_setInterestRateModel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address payable", "name": "newPendingAdmin", "type": "address" }], "name": "_setPendingAdmin", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "newReserveFactorMantissa", "type": "uint256" }], "name": "_setReserveFactor", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "accrualBlockNumber", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "accrueInterest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOfUnderlying", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "borrowAmount", "type": "uint256" }], "name": "borrow", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "borrowBalanceCurrent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "borrowBalanceStored", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "borrowIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "borrowRatePerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "comptroller", "outputs": [{ "internalType": "contract ComptrollerInterface", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "exchangeRateCurrent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "exchangeRateStored", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getAccountSnapshot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCash", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "underlying_", "type": "address" }, { "internalType": "contract ComptrollerInterface", "name": "comptroller_", "type": "address" }, { "internalType": "contract InterestRateModel", "name": "interestRateModel_", "type": "address" }, { "internalType": "uint256", "name": "initialExchangeRateMantissa_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract ComptrollerInterface", "name": "comptroller_", "type": "address" }, { "internalType": "contract InterestRateModel", "name": "interestRateModel_", "type": "address" }, { "internalType": "uint256", "name": "initialExchangeRateMantissa_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "interestRateModel", "outputs": [{ "internalType": "contract InterestRateModel", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isVToken", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "borrower", "type": "address" }, { "internalType": "uint256", "name": "repayAmount", "type": "uint256" }, { "internalType": "contract VTokenInterface", "name": "vTokenCollateral", "type": "address" }], "name": "liquidateBorrow", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "mintAmount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "mintAmount", "type": "uint256" }], "name": "mintBehalf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pendingAdmin", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "redeemTokens", "type": "uint256" }], "name": "redeem", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "redeemAmount", "type": "uint256" }], "name": "redeemUnderlying", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "repayAmount", "type": "uint256" }], "name": "repayBorrow", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "borrower", "type": "address" }, { "internalType": "uint256", "name": "repayAmount", "type": "uint256" }], "name": "repayBorrowBehalf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "reserveFactorMantissa", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "liquidator", "type": "address" }, { "internalType": "address", "name": "borrower", "type": "address" }, { "internalType": "uint256", "name": "seizeTokens", "type": "uint256" }], "name": "seize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "supplyRatePerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalBorrows", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "totalBorrowsCurrent", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalReserves", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "src", "type": "address" }, { "internalType": "address", "name": "dst", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "underlying", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }]

const TokenVault = [{ "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const DeriLens = [{ "inputs": [{ "internalType": "address", "name": "everlastingOptionPricingLens_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "everlastingOptionPricingLens", "outputs": [{ "internalType": "contract IEverlastingOptionPricingLens", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }, { "internalType": "address", "name": "account_", "type": "address" }, { "components": [{ "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "int256", "name": "volatility", "type": "int256" }], "internalType": "struct DeriLens.PriceAndVolatility[]", "name": "pvs", "type": "tuple[]" }], "name": "getInfo", "outputs": [{ "components": [{ "internalType": "address", "name": "pool", "type": "address" }, { "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "address", "name": "protocolFeeCollector", "type": "address" }, { "internalType": "address", "name": "tokenB0", "type": "address" }, { "internalType": "address", "name": "tokenWETH", "type": "address" }, { "internalType": "address", "name": "vTokenB0", "type": "address" }, { "internalType": "address", "name": "vTokenETH", "type": "address" }, { "internalType": "address", "name": "lToken", "type": "address" }, { "internalType": "address", "name": "pToken", "type": "address" }, { "internalType": "address", "name": "oracleManager", "type": "address" }, { "internalType": "address", "name": "swapper", "type": "address" }, { "internalType": "address", "name": "symbolManager", "type": "address" }, { "internalType": "uint256", "name": "reserveRatioB0", "type": "uint256" }, { "internalType": "int256", "name": "minRatioB0", "type": "int256" }, { "internalType": "int256", "name": "poolInitialMarginMultiplier", "type": "int256" }, { "internalType": "int256", "name": "protocolFeeCollectRatio", "type": "int256" }, { "internalType": "int256", "name": "minLiquidationReward", "type": "int256" }, { "internalType": "int256", "name": "maxLiquidationReward", "type": "int256" }, { "internalType": "int256", "name": "liquidationRewardCutRatio", "type": "int256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "lpsPnl", "type": "int256" }, { "internalType": "int256", "name": "cumulativePnlPerLiquidity", "type": "int256" }, { "internalType": "int256", "name": "protocolFeeAccrued", "type": "int256" }, { "internalType": "address", "name": "symbolManagerImplementation", "type": "address" }, { "internalType": "int256", "name": "initialMarginRequired", "type": "int256" }], "internalType": "struct DeriLens.PoolInfo", "name": "poolInfo", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "string", "name": "underlyingSymbol", "type": "string" }, { "internalType": "string", "name": "vTokenSymbol", "type": "string" }, { "internalType": "uint256", "name": "underlyingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "exchangeRate", "type": "uint256" }, { "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }], "internalType": "struct DeriLens.MarketInfo[]", "name": "marketsInfo", "type": "tuple[]" }, { "components": [{ "internalType": "string", "name": "category", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address", "name": "symbolAddress", "type": "address" }, { "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "address", "name": "manager", "type": "address" }, { "internalType": "address", "name": "oracleManager", "type": "address" }, { "internalType": "bytes32", "name": "symbolId", "type": "bytes32" }, { "internalType": "int256", "name": "feeRatio", "type": "int256" }, { "internalType": "int256", "name": "alpha", "type": "int256" }, { "internalType": "int256", "name": "fundingPeriod", "type": "int256" }, { "internalType": "int256", "name": "minTradeVolume", "type": "int256" }, { "internalType": "int256", "name": "minInitialMarginRatio", "type": "int256" }, { "internalType": "int256", "name": "initialMarginRatio", "type": "int256" }, { "internalType": "int256", "name": "maintenanceMarginRatio", "type": "int256" }, { "internalType": "int256", "name": "pricePercentThreshold", "type": "int256" }, { "internalType": "uint256", "name": "timeThreshold", "type": "uint256" }, { "internalType": "bool", "name": "isCloseOnly", "type": "bool" }, { "internalType": "bytes32", "name": "priceId", "type": "bytes32" }, { "internalType": "bytes32", "name": "volatilityId", "type": "bytes32" }, { "internalType": "int256", "name": "feeRatioITM", "type": "int256" }, { "internalType": "int256", "name": "feeRatioOTM", "type": "int256" }, { "internalType": "int256", "name": "strikePrice", "type": "int256" }, { "internalType": "bool", "name": "isCall", "type": "bool" }, { "internalType": "int256", "name": "netVolume", "type": "int256" }, { "internalType": "int256", "name": "netCost", "type": "int256" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "uint256", "name": "fundingTimestamp", "type": "uint256" }, { "internalType": "int256", "name": "cumulativeFundingPerVolume", "type": "int256" }, { "internalType": "int256", "name": "tradersPnl", "type": "int256" }, { "internalType": "int256", "name": "initialMarginRequired", "type": "int256" }, { "internalType": "uint256", "name": "nPositionHolders", "type": "uint256" }, { "internalType": "int256", "name": "curIndexPrice", "type": "int256" }, { "internalType": "int256", "name": "curVolatility", "type": "int256" }, { "internalType": "int256", "name": "curCumulativeFundingPerVolume", "type": "int256" }, { "internalType": "int256", "name": "K", "type": "int256" }, { "internalType": "int256", "name": "markPrice", "type": "int256" }, { "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "timeValue", "type": "int256" }, { "internalType": "int256", "name": "delta", "type": "int256" }, { "internalType": "int256", "name": "u", "type": "int256" }], "internalType": "struct DeriLens.SymbolInfo[]", "name": "symbolsInfo", "type": "tuple[]" }, { "components": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "lTokenId", "type": "uint256" }, { "internalType": "address", "name": "vault", "type": "address" }, { "internalType": "int256", "name": "amountB0", "type": "int256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "cumulativePnlPerLiquidity", "type": "int256" }, { "internalType": "uint256", "name": "vaultLiquidity", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "string", "name": "underlyingSymbol", "type": "string" }, { "internalType": "string", "name": "vTokenSymbol", "type": "string" }, { "internalType": "uint256", "name": "underlyingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "exchangeRate", "type": "uint256" }, { "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }], "internalType": "struct DeriLens.MarketInfo[]", "name": "markets", "type": "tuple[]" }], "internalType": "struct DeriLens.LpInfo", "name": "lpInfo", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "address", "name": "vault", "type": "address" }, { "internalType": "int256", "name": "amountB0", "type": "int256" }, { "internalType": "uint256", "name": "vaultLiquidity", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "string", "name": "underlyingSymbol", "type": "string" }, { "internalType": "string", "name": "vTokenSymbol", "type": "string" }, { "internalType": "uint256", "name": "underlyingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "exchangeRate", "type": "uint256" }, { "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }], "internalType": "struct DeriLens.MarketInfo[]", "name": "markets", "type": "tuple[]" }, { "components": [{ "internalType": "address", "name": "symbolAddress", "type": "address" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "int256", "name": "volume", "type": "int256" }, { "internalType": "int256", "name": "cost", "type": "int256" }, { "internalType": "int256", "name": "cumulativeFundingPerVolume", "type": "int256" }], "internalType": "struct DeriLens.PositionInfo[]", "name": "positions", "type": "tuple[]" }], "internalType": "struct DeriLens.TdInfo", "name": "tdInfo", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }, { "internalType": "address", "name": "account_", "type": "address" }], "name": "getLpInfo", "outputs": [{ "components": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "lTokenId", "type": "uint256" }, { "internalType": "address", "name": "vault", "type": "address" }, { "internalType": "int256", "name": "amountB0", "type": "int256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "cumulativePnlPerLiquidity", "type": "int256" }, { "internalType": "uint256", "name": "vaultLiquidity", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "string", "name": "underlyingSymbol", "type": "string" }, { "internalType": "string", "name": "vTokenSymbol", "type": "string" }, { "internalType": "uint256", "name": "underlyingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "exchangeRate", "type": "uint256" }, { "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }], "internalType": "struct DeriLens.MarketInfo[]", "name": "markets", "type": "tuple[]" }], "internalType": "struct DeriLens.LpInfo", "name": "info", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }], "name": "getMarketsInfo", "outputs": [{ "components": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "string", "name": "underlyingSymbol", "type": "string" }, { "internalType": "string", "name": "vTokenSymbol", "type": "string" }, { "internalType": "uint256", "name": "underlyingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "exchangeRate", "type": "uint256" }, { "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }], "internalType": "struct DeriLens.MarketInfo[]", "name": "infos", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }], "name": "getPoolInfo", "outputs": [{ "components": [{ "internalType": "address", "name": "pool", "type": "address" }, { "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "address", "name": "protocolFeeCollector", "type": "address" }, { "internalType": "address", "name": "tokenB0", "type": "address" }, { "internalType": "address", "name": "tokenWETH", "type": "address" }, { "internalType": "address", "name": "vTokenB0", "type": "address" }, { "internalType": "address", "name": "vTokenETH", "type": "address" }, { "internalType": "address", "name": "lToken", "type": "address" }, { "internalType": "address", "name": "pToken", "type": "address" }, { "internalType": "address", "name": "oracleManager", "type": "address" }, { "internalType": "address", "name": "swapper", "type": "address" }, { "internalType": "address", "name": "symbolManager", "type": "address" }, { "internalType": "uint256", "name": "reserveRatioB0", "type": "uint256" }, { "internalType": "int256", "name": "minRatioB0", "type": "int256" }, { "internalType": "int256", "name": "poolInitialMarginMultiplier", "type": "int256" }, { "internalType": "int256", "name": "protocolFeeCollectRatio", "type": "int256" }, { "internalType": "int256", "name": "minLiquidationReward", "type": "int256" }, { "internalType": "int256", "name": "maxLiquidationReward", "type": "int256" }, { "internalType": "int256", "name": "liquidationRewardCutRatio", "type": "int256" }, { "internalType": "int256", "name": "liquidity", "type": "int256" }, { "internalType": "int256", "name": "lpsPnl", "type": "int256" }, { "internalType": "int256", "name": "cumulativePnlPerLiquidity", "type": "int256" }, { "internalType": "int256", "name": "protocolFeeAccrued", "type": "int256" }, { "internalType": "address", "name": "symbolManagerImplementation", "type": "address" }, { "internalType": "int256", "name": "initialMarginRequired", "type": "int256" }], "internalType": "struct DeriLens.PoolInfo", "name": "info", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }, { "components": [{ "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "int256", "name": "volatility", "type": "int256" }], "internalType": "struct DeriLens.PriceAndVolatility[]", "name": "pvs", "type": "tuple[]" }], "name": "getSymbolsInfo", "outputs": [{ "components": [{ "internalType": "string", "name": "category", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address", "name": "symbolAddress", "type": "address" }, { "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "address", "name": "manager", "type": "address" }, { "internalType": "address", "name": "oracleManager", "type": "address" }, { "internalType": "bytes32", "name": "symbolId", "type": "bytes32" }, { "internalType": "int256", "name": "feeRatio", "type": "int256" }, { "internalType": "int256", "name": "alpha", "type": "int256" }, { "internalType": "int256", "name": "fundingPeriod", "type": "int256" }, { "internalType": "int256", "name": "minTradeVolume", "type": "int256" }, { "internalType": "int256", "name": "minInitialMarginRatio", "type": "int256" }, { "internalType": "int256", "name": "initialMarginRatio", "type": "int256" }, { "internalType": "int256", "name": "maintenanceMarginRatio", "type": "int256" }, { "internalType": "int256", "name": "pricePercentThreshold", "type": "int256" }, { "internalType": "uint256", "name": "timeThreshold", "type": "uint256" }, { "internalType": "bool", "name": "isCloseOnly", "type": "bool" }, { "internalType": "bytes32", "name": "priceId", "type": "bytes32" }, { "internalType": "bytes32", "name": "volatilityId", "type": "bytes32" }, { "internalType": "int256", "name": "feeRatioITM", "type": "int256" }, { "internalType": "int256", "name": "feeRatioOTM", "type": "int256" }, { "internalType": "int256", "name": "strikePrice", "type": "int256" }, { "internalType": "bool", "name": "isCall", "type": "bool" }, { "internalType": "int256", "name": "netVolume", "type": "int256" }, { "internalType": "int256", "name": "netCost", "type": "int256" }, { "internalType": "int256", "name": "indexPrice", "type": "int256" }, { "internalType": "uint256", "name": "fundingTimestamp", "type": "uint256" }, { "internalType": "int256", "name": "cumulativeFundingPerVolume", "type": "int256" }, { "internalType": "int256", "name": "tradersPnl", "type": "int256" }, { "internalType": "int256", "name": "initialMarginRequired", "type": "int256" }, { "internalType": "uint256", "name": "nPositionHolders", "type": "uint256" }, { "internalType": "int256", "name": "curIndexPrice", "type": "int256" }, { "internalType": "int256", "name": "curVolatility", "type": "int256" }, { "internalType": "int256", "name": "curCumulativeFundingPerVolume", "type": "int256" }, { "internalType": "int256", "name": "K", "type": "int256" }, { "internalType": "int256", "name": "markPrice", "type": "int256" }, { "internalType": "int256", "name": "funding", "type": "int256" }, { "internalType": "int256", "name": "timeValue", "type": "int256" }, { "internalType": "int256", "name": "delta", "type": "int256" }, { "internalType": "int256", "name": "u", "type": "int256" }], "internalType": "struct DeriLens.SymbolInfo[]", "name": "infos", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pool_", "type": "address" }, { "internalType": "address", "name": "account_", "type": "address" }], "name": "getTdInfo", "outputs": [{ "components": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "pTokenId", "type": "uint256" }, { "internalType": "address", "name": "vault", "type": "address" }, { "internalType": "int256", "name": "amountB0", "type": "int256" }, { "internalType": "uint256", "name": "vaultLiquidity", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "underlying", "type": "address" }, { "internalType": "address", "name": "vToken", "type": "address" }, { "internalType": "string", "name": "underlyingSymbol", "type": "string" }, { "internalType": "string", "name": "vTokenSymbol", "type": "string" }, { "internalType": "uint256", "name": "underlyingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "exchangeRate", "type": "uint256" }, { "internalType": "uint256", "name": "vTokenBalance", "type": "uint256" }], "internalType": "struct DeriLens.MarketInfo[]", "name": "markets", "type": "tuple[]" }, { "components": [{ "internalType": "address", "name": "symbolAddress", "type": "address" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "int256", "name": "volume", "type": "int256" }, { "internalType": "int256", "name": "cost", "type": "int256" }, { "internalType": "int256", "name": "cumulativeFundingPerVolume", "type": "int256" }], "internalType": "struct DeriLens.PositionInfo[]", "name": "positions", "type": "tuple[]" }], "internalType": "struct DeriLens.TdInfo", "name": "info", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nameId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "versionId", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }]

module.exports = {
    ERC20,
    PoolImplementation,
    SymbolImplementationFutures,
    SymbolImplementationOption,
    DToken,
    VaultImplementation,
    VBNB,
    VBep20,
    TokenVault,
    DeriLens,
}
