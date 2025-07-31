module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/abis/Lottery.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"Lottery\",\"sourceName\":\"contracts/Lottery.sol\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_usdtAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_feeAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"}],\"name\":\"Entered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"}],\"name\":\"WinnerPicked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"TICKET_PRICE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlayers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPrizePool\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"participate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pickWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"players\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdt\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"bytecode\":\"0x60c06040523480156200001157600080fd5b506040516200127238038062001272833981810160405281019062000037919062000151565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505062000198565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200011982620000ec565b9050919050565b6200012b816200010c565b81146200013757600080fd5b50565b6000815190506200014b8162000120565b92915050565b600080604083850312156200016b576200016a620000e7565b5b60006200017b858286016200013a565b92505060206200018e858286016200013a565b9150509250929050565b60805160a05161108a620001e8600039600081816101c101526104a001526000818161019d0152818161022f015281816103c501528181610464015281816105cf0152610722015261108a6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063884bf67c11610066578063884bf67c146100fc5780638b5b9ccc1461011a5780638da5cb5b14610138578063d11711a214610156578063f71d96cb1461016057610093565b80631a95f15f146100985780632f48ab7d146100b657806341275358146100d45780635d495aea146100f2575b600080fd5b6100a0610190565b6040516100ad91906109b1565b60405180910390f35b6100be61019b565b6040516100cb9190610a4b565b60405180910390f35b6100dc6101bf565b6040516100e99190610a87565b60405180910390f35b6100fa6101e3565b005b6101046105cb565b60405161011191906109b1565b60405180910390f35b61012261066c565b60405161012f9190610b60565b60405180910390f35b6101406106fa565b60405161014d9190610a87565b60405180910390f35b61015e61071e565b005b61017a60048036038101906101759190610bb3565b6108b2565b6040516101879190610a87565b60405180910390f35b662386f26fc1000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001805490501161022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290610c63565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102869190610a87565b602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610c98565b90506000811161030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d11565b60405180910390fd5b6000600180549050424460018054905060405160200161032e93929190610d52565b6040516020818303038152906040528051906020012060001c6103519190610dbe565b905060006001828154811061036957610368610def565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064605a856103a79190610e4d565b6103b19190610e8f565b9050600081856103c19190610ec0565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161041e929190610ef4565b6020604051808303816000875af115801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610f55565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104dd929190610ef4565b6020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610f55565b50600067ffffffffffffffff81111561053c5761053b610f82565b5b60405190808252806020026020018201604052801561056a5781602001602082028036833780820191505090505b50600190805190602001906105809291906108f1565b508273ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106269190610a87565b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610c98565b905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106f057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a6575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330662386f26fc100006040518463ffffffff1660e01b815260040161078493929190610fb1565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190610f55565b905080610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611034565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f9d8f2d54c1a8ffb26973551e72794da9bd5b8529f24c494a6f1590d35d5e8ecf60405160405180910390a250565b600181815481106108c257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561096a579160200282015b828111156109695782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610911565b5b509050610977919061097b565b5090565b5b8082111561099457600081600090555060010161097c565b5090565b6000819050919050565b6109ab81610998565b82525050565b60006020820190506109c660008301846109a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a11610a0c610a07846109cc565b6109ec565b6109cc565b9050919050565b6000610a23826109f6565b9050919050565b6000610a3582610a18565b9050919050565b610a4581610a2a565b82525050565b6000602082019050610a606000830184610a3c565b92915050565b6000610a71826109cc565b9050919050565b610a8181610a66565b82525050565b6000602082019050610a9c6000830184610a78565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ad781610a66565b82525050565b6000610ae98383610ace565b60208301905092915050565b6000602082019050919050565b6000610b0d82610aa2565b610b178185610aad565b9350610b2283610abe565b8060005b83811015610b53578151610b3a8882610add565b9750610b4583610af5565b925050600181019050610b26565b5085935050505092915050565b60006020820190508181036000830152610b7a8184610b02565b905092915050565b600080fd5b610b9081610998565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600060208284031215610bc957610bc8610b82565b5b6000610bd784828501610b9e565b91505092915050565b600082825260208201905092915050565b7f4c6f74746572793a204e6f20706c617965727320746f207069636b206120776960008201527f6e6e65722066726f6d0000000000000000000000000000000000000000000000602082015250565b6000610c4d602983610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b600081519050610c9281610b87565b92915050565b600060208284031215610cae57610cad610b82565b5b6000610cbc84828501610c83565b91505092915050565b7f4c6f74746572793a205072697a6520706f6f6c20697320656d70747900000000600082015250565b6000610cfb601c83610be0565b9150610d0682610cc5565b602082019050919050565b60006020820190508181036000830152610d2a81610cee565b9050919050565b6000819050919050565b610d4c610d4782610998565b610d31565b82525050565b6000610d5e8286610d3b565b602082019150610d6e8285610d3b565b602082019150610d7e8284610d3b565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc982610998565b9150610dd483610998565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5882610998565b9150610e6383610998565b9250828202610e7181610998565b91508282048414831517610e8857610e87610e1e565b5b5092915050565b6000610e9a82610998565b9150610ea583610998565b925082610eb557610eb4610d8f565b5b828204905092915050565b6000610ecb82610998565b9150610ed683610998565b9250828203905081811115610eee57610eed610e1e565b5b92915050565b6000604082019050610f096000830185610a78565b610f1660208301846109a2565b9392505050565b60008115159050919050565b610f3281610f1d565b8114610f3d57600080fd5b50565b600081519050610f4f81610f29565b92915050565b600060208284031215610f6b57610f6a610b82565b5b6000610f7984828501610f40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000606082019050610fc66000830186610a78565b610fd36020830185610a78565b610fe060408301846109a2565b949350505050565b7f4c6f74746572793a2055534454207472616e73666572206661696c6564000000600082015250565b600061101e601d83610be0565b915061102982610fe8565b602082019050919050565b6000602082019050818103600083015261104d81611011565b905091905056fea26469706673582212209dbfec90135cbbcdd2062d033316d6af404761ba7346d3370303ed95e8c273fc64736f6c63430008180033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063884bf67c11610066578063884bf67c146100fc5780638b5b9ccc1461011a5780638da5cb5b14610138578063d11711a214610156578063f71d96cb1461016057610093565b80631a95f15f146100985780632f48ab7d146100b657806341275358146100d45780635d495aea146100f2575b600080fd5b6100a0610190565b6040516100ad91906109b1565b60405180910390f35b6100be61019b565b6040516100cb9190610a4b565b60405180910390f35b6100dc6101bf565b6040516100e99190610a87565b60405180910390f35b6100fa6101e3565b005b6101046105cb565b60405161011191906109b1565b60405180910390f35b61012261066c565b60405161012f9190610b60565b60405180910390f35b6101406106fa565b60405161014d9190610a87565b60405180910390f35b61015e61071e565b005b61017a60048036038101906101759190610bb3565b6108b2565b6040516101879190610a87565b60405180910390f35b662386f26fc1000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001805490501161022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290610c63565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102869190610a87565b602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610c98565b90506000811161030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d11565b60405180910390fd5b6000600180549050424460018054905060405160200161032e93929190610d52565b6040516020818303038152906040528051906020012060001c6103519190610dbe565b905060006001828154811061036957610368610def565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064605a856103a79190610e4d565b6103b19190610e8f565b9050600081856103c19190610ec0565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161041e929190610ef4565b6020604051808303816000875af115801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610f55565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104dd929190610ef4565b6020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610f55565b50600067ffffffffffffffff81111561053c5761053b610f82565b5b60405190808252806020026020018201604052801561056a5781602001602082028036833780820191505090505b50600190805190602001906105809291906108f1565b508273ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106269190610a87565b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610c98565b905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106f057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a6575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330662386f26fc100006040518463ffffffff1660e01b815260040161078493929190610fb1565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190610f55565b905080610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611034565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f9d8f2d54c1a8ffb26973551e72794da9bd5b8529f24c494a6f1590d35d5e8ecf60405160405180910390a250565b600181815481106108c257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561096a579160200282015b828111156109695782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610911565b5b509050610977919061097b565b5090565b5b8082111561099457600081600090555060010161097c565b5090565b6000819050919050565b6109ab81610998565b82525050565b60006020820190506109c660008301846109a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a11610a0c610a07846109cc565b6109ec565b6109cc565b9050919050565b6000610a23826109f6565b9050919050565b6000610a3582610a18565b9050919050565b610a4581610a2a565b82525050565b6000602082019050610a606000830184610a3c565b92915050565b6000610a71826109cc565b9050919050565b610a8181610a66565b82525050565b6000602082019050610a9c6000830184610a78565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ad781610a66565b82525050565b6000610ae98383610ace565b60208301905092915050565b6000602082019050919050565b6000610b0d82610aa2565b610b178185610aad565b9350610b2283610abe565b8060005b83811015610b53578151610b3a8882610add565b9750610b4583610af5565b925050600181019050610b26565b5085935050505092915050565b60006020820190508181036000830152610b7a8184610b02565b905092915050565b600080fd5b610b9081610998565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600060208284031215610bc957610bc8610b82565b5b6000610bd784828501610b9e565b91505092915050565b600082825260208201905092915050565b7f4c6f74746572793a204e6f20706c617965727320746f207069636b206120776960008201527f6e6e65722066726f6d0000000000000000000000000000000000000000000000602082015250565b6000610c4d602983610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b600081519050610c9281610b87565b92915050565b600060208284031215610cae57610cad610b82565b5b6000610cbc84828501610c83565b91505092915050565b7f4c6f74746572793a205072697a6520706f6f6c20697320656d70747900000000600082015250565b6000610cfb601c83610be0565b9150610d0682610cc5565b602082019050919050565b60006020820190508181036000830152610d2a81610cee565b9050919050565b6000819050919050565b610d4c610d4782610998565b610d31565b82525050565b6000610d5e8286610d3b565b602082019150610d6e8285610d3b565b602082019150610d7e8284610d3b565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc982610998565b9150610dd483610998565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5882610998565b9150610e6383610998565b9250828202610e7181610998565b91508282048414831517610e8857610e87610e1e565b5b5092915050565b6000610e9a82610998565b9150610ea583610998565b925082610eb557610eb4610d8f565b5b828204905092915050565b6000610ecb82610998565b9150610ed683610998565b9250828203905081811115610eee57610eed610e1e565b5b92915050565b6000604082019050610f096000830185610a78565b610f1660208301846109a2565b9392505050565b60008115159050919050565b610f3281610f1d565b8114610f3d57600080fd5b50565b600081519050610f4f81610f29565b92915050565b600060208284031215610f6b57610f6a610b82565b5b6000610f7984828501610f40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000606082019050610fc66000830186610a78565b610fd36020830185610a78565b610fe060408301846109a2565b949350505050565b7f4c6f74746572793a2055534454207472616e73666572206661696c6564000000600082015250565b600061101e601d83610be0565b915061102982610fe8565b602082019050919050565b6000602082019050818103600083015261104d81611011565b905091905056fea26469706673582212209dbfec90135cbbcdd2062d033316d6af404761ba7346d3370303ed95e8c273fc64736f6c63430008180033\",\"linkReferences\":{},\"deployedLinkReferences\":{}}"));}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Header = ({ account, balance, connectWallet })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const baseButtonStyle = "rounded-[21px] flex-shrink-0 font-bold flex items-center justify-center text-sm w-auto px-4 h-[32px] md:text-base md:h-[34px]";
    const buttonStyle = account ? `${baseButtonStyle} border border-white bg-gradient-to-r from-[#1AEBA9] to-[#384FC0] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]` : `${baseButtonStyle} bg-black w-[110px] md:w-[139px]`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between px-4 py-6 md:px-[8.33vw] md:py-[5.5vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/header_logo.svg",
                    alt: "TetherLuck Logo",
                    width: 135,
                    height: 40,
                    className: "h-auto w-[120px] md:w-[10vw]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center space-x-2 md:space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/how-to-play",
                        className: "text-sm text-white hover:text-gray-300 md:text-base md:hover:text-white",
                        children: "참여 방법"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${baseButtonStyle} bg-black/50 border border-gray-600`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        balance.toFixed(2),
                                        " USDT"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (pathname === '/') connectWallet();
                                },
                                className: `${buttonStyle} min-w-[120px]`,
                                children: pathname.startsWith('/room/') ? `${account.substring(0, 6)}...${account.slice(-4)}` : '게임 시작'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: connectWallet,
                        className: buttonStyle,
                        children: "지갑 연결"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/SideMenu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
const SideMenu = ({ onOpenMyPage, onOpenExplain })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 w-[80px] h-[200px] flex-shrink-0 rounded-[20px] bg-gradient-to-b from-[#FFF17E] to-[#1BE6FD] p-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:right-[1.67vw] md:w-[6vw] md:h-[28vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full h-full rounded-[19px] bg-gradient-to-b from-[#311A1A] to-[#13399A] flex flex-col items-center justify-center space-y-4 md:space-y-[4vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onOpenExplain,
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icon_explain.svg",
                            alt: "Game Explain",
                            width: 48,
                            height: 48,
                            className: "w-8 h-8 md:w-10 md:h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 14,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs mt-1",
                            children: "게임설명"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 15,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SideMenu.tsx",
                    lineNumber: 13,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onOpenMyPage,
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icon_mypage.svg",
                            alt: "My Page",
                            width: 48,
                            height: 48,
                            className: "w-8 h-8 md:w-10 md:h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 21,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs mt-1",
                            children: "마이페이지"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SideMenu.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideMenu.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SideMenu.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = SideMenu;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/abis/Vault.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"Vault\",\"sourceName\":\"contracts/Vault.sol\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_usdtAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_initialOwner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdrawal\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdt\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"bytecode\":\"0x60a06040523480156200001157600080fd5b50604051620011b7380380620011b7833981810160405281019062000037919062000229565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000281565b60405180910390fd5b620000be81620000fb60201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050506200029e565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f182620001c4565b9050919050565b6200020381620001e4565b81146200020f57600080fd5b50565b6000815190506200022381620001f8565b92915050565b60008060408385031215620002435762000242620001bf565b5b6000620002538582860162000212565b9250506020620002668582860162000212565b9150509250929050565b6200027b81620001e4565b82525050565b600060208201905062000298600083018462000270565b92915050565b608051610eda620002dd6000396000818161013e015281816101dd01528181610283015281816103660152818161056e015261064f0152610eda6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c8578063b6b55f25146100e6578063f2fde38b14610102578063f3fef3a31461011e5761007d565b806312065fe0146100825780632f48ab7d146100a0578063715018a6146100be575b600080fd5b61008a61013a565b60405161009791906108ed565b60405180910390f35b6100a86101db565b6040516100b59190610987565b60405180910390f35b6100c66101ff565b005b6100d0610213565b6040516100dd91906109c3565b60405180910390f35b61010060048036038101906100fb9190610a0f565b61023c565b005b61011c60048036038101906101179190610a68565b610499565b005b61013860048036038101906101339190610a95565b61051f565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161019591906109c3565b602060405180830381865afa1580156101b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d69190610aea565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b610207610781565b6102116000610808565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000811161027f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027690610b9a565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016102dc929190610bba565b602060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190610aea565b905081811015610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035990610c2f565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016103c193929190610c4f565b6020604051808303816000875af11580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610cbe565b905080610446576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043d90610d37565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c8460405161048c91906108ed565b60405180910390a2505050565b6104a1610781565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105135760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161050a91906109c3565b60405180910390fd5b61051c81610808565b50565b610527610781565b6000811161056a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056190610dc9565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105c591906109c3565b602060405180830381865afa1580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190610aea565b90508181101561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290610e5b565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b81526004016106a8929190610e7b565b6020604051808303816000875af11580156106c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106eb9190610cbe565b90508061072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490610d37565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658460405161077391906108ed565b60405180910390a250505050565b6107896108cc565b73ffffffffffffffffffffffffffffffffffffffff166107a7610213565b73ffffffffffffffffffffffffffffffffffffffff1614610806576107ca6108cc565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107fd91906109c3565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6108e7816108d4565b82525050565b600060208201905061090260008301846108de565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061094d61094861094384610908565b610928565b610908565b9050919050565b600061095f82610932565b9050919050565b600061097182610954565b9050919050565b61098181610966565b82525050565b600060208201905061099c6000830184610978565b92915050565b60006109ad82610908565b9050919050565b6109bd816109a2565b82525050565b60006020820190506109d860008301846109b4565b92915050565b600080fd5b6109ec816108d4565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a246109de565b5b6000610a33848285016109fa565b91505092915050565b610a45816109a2565b8114610a5057600080fd5b50565b600081359050610a6281610a3c565b92915050565b600060208284031215610a7e57610a7d6109de565b5b6000610a8c84828501610a53565b91505092915050565b60008060408385031215610aac57610aab6109de565b5b6000610aba85828601610a53565b9250506020610acb858286016109fa565b9150509250929050565b600081519050610ae4816109e3565b92915050565b600060208284031215610b0057610aff6109de565b5b6000610b0e84828501610ad5565b91505092915050565b600082825260208201905092915050565b7f5661756c743a204465706f73697420616d6f756e74206d75737420626520677260008201527f6561746572207468616e207a65726f0000000000000000000000000000000000602082015250565b6000610b84602f83610b17565b9150610b8f82610b28565b604082019050919050565b60006020820190508181036000830152610bb381610b77565b9050919050565b6000604082019050610bcf60008301856109b4565b610bdc60208301846109b4565b9392505050565b7f5661756c743a20436865636b2074686520746f6b656e20616c6c6f77616e6365600082015250565b6000610c19602083610b17565b9150610c2482610be3565b602082019050919050565b60006020820190508181036000830152610c4881610c0c565b9050919050565b6000606082019050610c6460008301866109b4565b610c7160208301856109b4565b610c7e60408301846108de565b949350505050565b60008115159050919050565b610c9b81610c86565b8114610ca657600080fd5b50565b600081519050610cb881610c92565b92915050565b600060208284031215610cd457610cd36109de565b5b6000610ce284828501610ca9565b91505092915050565b7f5661756c743a2055534454207472616e73666572206661696c65640000000000600082015250565b6000610d21601b83610b17565b9150610d2c82610ceb565b602082019050919050565b60006020820190508181036000830152610d5081610d14565b9050919050565b7f5661756c743a20576974686472617720616d6f756e74206d757374206265206760008201527f726561746572207468616e207a65726f00000000000000000000000000000000602082015250565b6000610db3603083610b17565b9150610dbe82610d57565b604082019050919050565b60006020820190508181036000830152610de281610da6565b9050919050565b7f5661756c743a20496e73756666696369656e742062616c616e636520696e207460008201527f6865207661756c74000000000000000000000000000000000000000000000000602082015250565b6000610e45602883610b17565b9150610e5082610de9565b604082019050919050565b60006020820190508181036000830152610e7481610e38565b9050919050565b6000604082019050610e9060008301856109b4565b610e9d60208301846108de565b939250505056fea2646970667358221220ed1d731bd41d81d3efa159a5fc1ba95a15f1ce51bbe57ceaf515759a5e59a14f64736f6c63430008180033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c8578063b6b55f25146100e6578063f2fde38b14610102578063f3fef3a31461011e5761007d565b806312065fe0146100825780632f48ab7d146100a0578063715018a6146100be575b600080fd5b61008a61013a565b60405161009791906108ed565b60405180910390f35b6100a86101db565b6040516100b59190610987565b60405180910390f35b6100c66101ff565b005b6100d0610213565b6040516100dd91906109c3565b60405180910390f35b61010060048036038101906100fb9190610a0f565b61023c565b005b61011c60048036038101906101179190610a68565b610499565b005b61013860048036038101906101339190610a95565b61051f565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161019591906109c3565b602060405180830381865afa1580156101b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d69190610aea565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b610207610781565b6102116000610808565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000811161027f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027690610b9a565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016102dc929190610bba565b602060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190610aea565b905081811015610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035990610c2f565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016103c193929190610c4f565b6020604051808303816000875af11580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610cbe565b905080610446576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043d90610d37565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c8460405161048c91906108ed565b60405180910390a2505050565b6104a1610781565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105135760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161050a91906109c3565b60405180910390fd5b61051c81610808565b50565b610527610781565b6000811161056a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056190610dc9565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105c591906109c3565b602060405180830381865afa1580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190610aea565b90508181101561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290610e5b565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b81526004016106a8929190610e7b565b6020604051808303816000875af11580156106c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106eb9190610cbe565b90508061072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490610d37565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658460405161077391906108ed565b60405180910390a250505050565b6107896108cc565b73ffffffffffffffffffffffffffffffffffffffff166107a7610213565b73ffffffffffffffffffffffffffffffffffffffff1614610806576107ca6108cc565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107fd91906109c3565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6108e7816108d4565b82525050565b600060208201905061090260008301846108de565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061094d61094861094384610908565b610928565b610908565b9050919050565b600061095f82610932565b9050919050565b600061097182610954565b9050919050565b61098181610966565b82525050565b600060208201905061099c6000830184610978565b92915050565b60006109ad82610908565b9050919050565b6109bd816109a2565b82525050565b60006020820190506109d860008301846109b4565b92915050565b600080fd5b6109ec816108d4565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a246109de565b5b6000610a33848285016109fa565b91505092915050565b610a45816109a2565b8114610a5057600080fd5b50565b600081359050610a6281610a3c565b92915050565b600060208284031215610a7e57610a7d6109de565b5b6000610a8c84828501610a53565b91505092915050565b60008060408385031215610aac57610aab6109de565b5b6000610aba85828601610a53565b9250506020610acb858286016109fa565b9150509250929050565b600081519050610ae4816109e3565b92915050565b600060208284031215610b0057610aff6109de565b5b6000610b0e84828501610ad5565b91505092915050565b600082825260208201905092915050565b7f5661756c743a204465706f73697420616d6f756e74206d75737420626520677260008201527f6561746572207468616e207a65726f0000000000000000000000000000000000602082015250565b6000610b84602f83610b17565b9150610b8f82610b28565b604082019050919050565b60006020820190508181036000830152610bb381610b77565b9050919050565b6000604082019050610bcf60008301856109b4565b610bdc60208301846109b4565b9392505050565b7f5661756c743a20436865636b2074686520746f6b656e20616c6c6f77616e6365600082015250565b6000610c19602083610b17565b9150610c2482610be3565b602082019050919050565b60006020820190508181036000830152610c4881610c0c565b9050919050565b6000606082019050610c6460008301866109b4565b610c7160208301856109b4565b610c7e60408301846108de565b949350505050565b60008115159050919050565b610c9b81610c86565b8114610ca657600080fd5b50565b600081519050610cb881610c92565b92915050565b600060208284031215610cd457610cd36109de565b5b6000610ce284828501610ca9565b91505092915050565b7f5661756c743a2055534454207472616e73666572206661696c65640000000000600082015250565b6000610d21601b83610b17565b9150610d2c82610ceb565b602082019050919050565b60006020820190508181036000830152610d5081610d14565b9050919050565b7f5661756c743a20576974686472617720616d6f756e74206d757374206265206760008201527f726561746572207468616e207a65726f00000000000000000000000000000000602082015250565b6000610db3603083610b17565b9150610dbe82610d57565b604082019050919050565b60006020820190508181036000830152610de281610da6565b9050919050565b7f5661756c743a20496e73756666696369656e742062616c616e636520696e207460008201527f6865207661756c74000000000000000000000000000000000000000000000000602082015250565b6000610e45602883610b17565b9150610e5082610de9565b604082019050919050565b60006020820190508181036000830152610e7481610e38565b9050919050565b6000604082019050610e9060008301856109b4565b610e9d60208301846108de565b939250505056fea2646970667358221220ed1d731bd41d81d3efa159a5fc1ba95a15f1ce51bbe57ceaf515759a5e59a14f64736f6c63430008180033\",\"linkReferences\":{},\"deployedLinkReferences\":{}}"));}),
"[project]/src/components/MyPageModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Vault$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/abis/Vault.json (json)");
'use client';
;
;
;
;
const API_BASE_URL = 'http://localhost:3001'; // This might need configuration
const VAULT_CONTRACT_ADDRESS = "0x43aFfaE1C51B04e772E69EfDd0453B0dC89EC3E6";
const USDT_CONTRACT_ADDRESS = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
// ABIs would ideally be managed better, e.g., loading from JSON files.
const vaultABI = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Vault$2e$json__$28$json$29$__["default"].abi;
const usdtABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)"
];
// --- MyPage Modal Component ---
const MyPageModal = ({ account, onClose, balance, onBalanceUpdate })=>{
    const [activeMainTab, setActiveMainTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('history'); // 'history' or 'wallet'
    // --- History Tab States ---
    const [allHistory, setAllHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeRoomId, setActiveRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoadingHistory, setIsLoadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [historyError, setHistoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Wallet Tab States ---
    const [isLoadingBalance, setIsLoadingBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // 초기 로딩은 부모가 하므로 false
    const [activeWalletTab, setActiveWalletTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('deposit'); // 'deposit', 'withdraw', 'transactions'
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingTransactions, setIsLoadingTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''); // For deposit/withdraw input
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // For transaction processing state
    const [walletError, setWalletError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch user transaction history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (account && activeWalletTab === 'transactions') {
            const fetchTransactions = async ()=>{
                setIsLoadingTransactions(true);
                // Assume a new endpoint /transactions/:address exists
                // const res = await fetch(`${API_BASE_URL}/transactions/${account}`);
                // const data = await res.json();
                // setTransactions(data.transactions || []);
                setIsLoadingTransactions(false);
            };
        // fetchTransactions();
        }
    }, [
        account,
        activeWalletTab
    ]);
    // Fetch game history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!account || activeMainTab !== 'history') return;
        const fetchHistoryAndRooms = async ()=>{
            setIsLoadingHistory(true);
            setHistoryError(null);
            try {
                const [historyRes, roomsRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/user-history/${account}`),
                    fetch(`${API_BASE_URL}/rooms`)
                ]);
                if (!historyRes.ok) throw new Error('Failed to fetch history.');
                if (!roomsRes.ok) throw new Error('Failed to fetch rooms.');
                const historyData = await historyRes.json();
                const roomsData = await roomsRes.json();
                setAllHistory(historyData.history || []);
                setRooms(roomsData || []);
                if (roomsData.length > 0 && !activeRoomId) {
                    setActiveRoomId(roomsData[0].id);
                }
            } catch (err) {
                setHistoryError(err.message);
            } finally{
                setIsLoadingHistory(false);
            }
        };
        fetchHistoryAndRooms();
    }, [
        account,
        activeMainTab
    ]);
    const handleDeposit = async ()=>{
        if (!amount || parseFloat(amount) <= 0) {
            setWalletError("Please enter a valid amount.");
            return;
        }
        if (!window.ethereum) {
            setWalletError("MetaMask is not installed.");
            return;
        }
        setIsProcessing(true);
        setWalletError(null);
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const usdtContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(USDT_CONTRACT_ADDRESS, usdtABI, signer);
            const vaultContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(VAULT_CONTRACT_ADDRESS, vaultABI, signer);
            const amountToDeposit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseUnits(amount, 18); // Assuming USDT has 18 decimals
            // 1. Approve
            const approveTx = await usdtContract.approve(VAULT_CONTRACT_ADDRESS, amountToDeposit);
            await approveTx.wait();
            // 2. Deposit
            const depositTx = await vaultContract.deposit(amountToDeposit);
            await depositTx.wait();
            alert("Deposit successful!");
            setAmount('');
            // Refresh balance after a short delay to allow backend to process event
            setTimeout(async ()=>{
                try {
                    const res = await fetch(`${API_BASE_URL}/balance/${account}`);
                    const data = await res.json();
                    onBalanceUpdate(data.balance); // 부모의 상태를 업데이트
                } catch (err) {
                    console.error("Failed to refetch balance:", err);
                }
            }, 3000);
        } catch (err) {
            setWalletError(err.reason || "An error occurred during deposit.");
        } finally{
            setIsProcessing(false);
        }
    };
    const handleWithdrawRequest = async ()=>{
        if (!amount || parseFloat(amount) <= 0) {
            setWalletError("Please enter a valid amount.");
            return;
        }
        if (parseFloat(amount) > balance) {
            setWalletError("Withdrawal amount cannot exceed your balance.");
            return;
        }
        setIsProcessing(true);
        setWalletError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/withdrawals/request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userAddress: account,
                    amount: parseFloat(amount)
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Failed to submit withdrawal request.");
            }
            alert("Withdrawal request submitted successfully!");
            onBalanceUpdate(data.newBalance); // 부모의 상태를 업데이트
            setAmount('');
        } catch (err) {
            setWalletError(err.message);
        } finally{
            setIsProcessing(false);
        }
    };
    const filteredHistory = allHistory.filter((item)=>{
        const activeRoom = rooms.find((r)=>r.id === activeRoomId);
        return activeRoom ? item.roomName.includes(activeRoom.name) : false;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[linear-gradient(#000000,#1A255D)] rounded-3xl w-full max-w-2xl text-left shadow-xl flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-t-3xl flex justify-center items-center p-4 border-b border-gray-700 bg-gradient-to-r from-[#143892] to-[#0E369D] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-['Pretendard'] text-base font-bold leading-normal text-white",
                        children: "마이페이지"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MyPageModal.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/MyPageModal.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-4 border-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveMainTab('history'),
                                className: `text-xl font-semibold pb-2 ${activeMainTab === 'history' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'}`,
                                children: "History"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MyPageModal.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveMainTab('wallet'),
                                className: `text-xl font-semibold pb-2 ${activeMainTab === 'wallet' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'}`,
                                children: "Wallet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MyPageModal.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MyPageModal.tsx",
                        lineNumber: 213,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/MyPageModal.tsx",
                    lineNumber: 212,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 h-[500px] overflow-y-auto",
                    children: [
                        activeMainTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-600 mb-4",
                                    children: rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveRoomId(room.id),
                                            className: `py-2 px-4 font-semibold transition-colors duration-200 ${activeRoomId === room.id ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`,
                                            children: room.name
                                        }, room.id, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                isLoadingHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto my-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0)) : historyError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-center",
                                    children: historyError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 46
                                }, ("TURBOPACK compile-time value", void 0)) : filteredHistory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 pr-2",
                                    children: filteredHistory.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: `p-4 rounded-md flex justify-between items-center ${item.wasWinner ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-black text-white text-center font-bold rounded-md px-3 py-2",
                                                            children: [
                                                                "Round #",
                                                                item.roundNumber
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        "Winning # ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-lg",
                                                                            children: item.roundNumber
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                                            lineNumber: 248,
                                                                            columnNumber: 92
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        "My # ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-lg",
                                                                            children: item.roundNumber
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 87
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold",
                                                    children: item.wasWinner ? 'WIN' : 'LOSE'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 242,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-center py-4",
                                    children: "No participation history for this room."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 258,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MyPageModal.tsx",
                            lineNumber: 227,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        activeMainTab === 'wallet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg text-gray-400 mb-2",
                                            children: "My Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 265,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isLoadingBalance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 bg-gray-700 rounded-md animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 267,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-yellow-400",
                                            children: [
                                                balance.toFixed(4),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl text-gray-300",
                                                    children: "USDT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 108
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-600 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveWalletTab('deposit'),
                                            className: `py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'deposit' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`,
                                            children: "Deposit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveWalletTab('withdraw'),
                                            className: `py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'withdraw' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`,
                                            children: "Withdraw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 278,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveWalletTab('transactions'),
                                            className: `py-2 px-4 font-semibold transition-colors duration-200 ${activeWalletTab === 'transactions' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'}`,
                                            children: "Transactions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 274,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                walletError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-center mb-4",
                                    children: walletError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeWalletTab === 'deposit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300",
                                            children: "Enter the amount of USDT to deposit from your wallet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: "w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 292,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDeposit,
                                            disabled: isProcessing,
                                            className: "w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500",
                                            children: isProcessing ? 'Processing...' : 'Deposit USDT'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 293,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 290,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeWalletTab === 'withdraw' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300",
                                            children: "Enter the amount to withdraw to your wallet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 302,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: "w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 303,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleWithdrawRequest,
                                            disabled: isProcessing,
                                            className: "w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500",
                                            children: isProcessing ? 'Processing...' : 'Request Withdraw'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 301,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeWalletTab === 'transactions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: isLoadingTransactions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Loading transactions..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MyPageModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Transaction history will be shown here."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MyPageModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 95
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 312,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MyPageModal.tsx",
                            lineNumber: 262,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MyPageModal.tsx",
                    lineNumber: 225,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MyPageModal.tsx",
            lineNumber: 207,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/MyPageModal.tsx",
        lineNumber: 206,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MyPageModal;
}),
"[project]/src/components/Timer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const Timer = ({ deadline, containerClassName, digitClassName })=>{
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        hours: '--',
        minutes: '--',
        seconds: '--'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!deadline) {
            setTimeLeft({
                hours: '--',
                minutes: '--',
                seconds: '--'
            });
            return;
        }
        const interval = setInterval(()=>{
            const now = new Date();
            const deadlineTime = new Date(deadline);
            const diff = deadlineTime.getTime() - now.getTime();
            if (diff <= 0) {
                setTimeLeft({
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
                clearInterval(interval);
                return;
            }
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(diff % (1000 * 60) / 1000);
            setTimeLeft({
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0')
            });
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        deadline
    ]);
    const totalSecondsLeft = deadline ? (new Date(deadline).getTime() - new Date().getTime()) / 1000 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClassName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${digitClassName} ${totalSecondsLeft < 3600 ? 'text-gray-100' : ''}`,
                children: timeLeft.hours
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ":",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${digitClassName} ${totalSecondsLeft < 60 ? 'text-gray-100' : ''}`,
                children: timeLeft.minutes
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ":",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${digitClassName} ${totalSecondsLeft <= 0 ? 'text-gray-100' : ''}`,
                children: timeLeft.seconds
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timer.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Timer;
}),
"[project]/src/components/GameExplainModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GameExplainModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const steps = [
    {
        id: 1,
        title: 'USDT(BEP-20) 지갑을 연동하세요.',
        image: '/img_rule_1.svg'
    },
    {
        id: 2,
        title: '서비스를 이용하기 위한 포인트를 충전합니다.',
        image: '/img_rule_2.svg'
    },
    {
        id: 3,
        title: '원하는 방에 참가하여 티켓을 구매합니다.',
        image: '/img_rule_3.svg'
    },
    {
        id: 4,
        title: '매 10분마다 진행되는 추첨을 기다립니다.',
        image: '/img_rule_4.svg'
    },
    {
        id: 5,
        title: '당첨 시 포인트가 지급되며, 언제든지 출금 가능합니다.',
        image: '/img_rule_5.svg'
    },
    {
        id: 6,
        title: '게임 규칙을 확인하세요.',
        image: '/img_rule_6.svg'
    },
    {
        id: 7,
        title: '안전한 거래를 위한 보안 설정을 완료하세요.',
        image: '/img_rule_7.svg'
    },
    {
        id: 8,
        title: '고객지원 및 문의사항을 확인하세요.',
        image: '/img_rule_8.svg'
    },
    {
        id: 9,
        title: '게임을 시작하고 즐기세요!',
        image: '/img_rule_9.svg'
    }
];
function GameExplainModal({ onClose, onConnectWallet }) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleNext = ()=>{
        setCurrentStep((prev)=>(prev + 1) % steps.length);
    };
    const handlePrev = ()=>{
        setCurrentStep((prev)=>(prev - 1 + steps.length) % steps.length);
    };
    const handleConnect = ()=>{
        onClose();
        onConnectWallet();
    };
    const currentStepData = steps[currentStep];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50 p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-b from-[#000000] to-[#122676] w-full max-w-[580px] aspect-[580/816] rounded-lg border-8 border-[#1ACFF8] px-6 md:px-8 relative flex flex-col text-white font-sans max-h-[90vh] overflow-y-auto custom-scrollbar",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-white font-['Pretendard'] mt-[8.6%] mb-[11.5%] text-2xl font-semibold leading-normal text-center",
                    children: "게임 룰 설명"
                }, void 0, false, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-base md:text-lg text-center text-gray-300 mb-[7.5%] border-b border-cyan-400 pb-[1%]",
                    children: "참가 방법"
                }, void 0, false, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-[75%] h-[75%] relative border-2 border-cyan-400 rounded-3xl flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-8 -mt-px -ml-px bg-cyan-500 text-white px-4 py-1 text-lg font-bold",
                            children: currentStepData.id
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: currentStepData.image,
                                alt: `Rule ${currentStepData.id}`,
                                width: 500,
                                height: 300,
                                className: "mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameExplainModal.tsx",
                                lineNumber: 94,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center mt-6 md:mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePrev,
                            className: "text-cyan-400 text-3xl p-2",
                            children: "◀"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 md:gap-4 mx-4 md:mx-6",
                            children: steps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setCurrentStep(index),
                                    className: `w-3 h-3 rounded-full cursor-pointer transition-all ${currentStep === index ? 'bg-cyan-400' : 'border-2 border-cyan-400'}`
                                }, index, false, {
                                    fileName: "[project]/src/components/GameExplainModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            className: "text-cyan-400 text-3xl p-2",
                            children: "▶"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GameExplainModal.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/GameExplainModal.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/room/[roomId]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>RoomPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Lottery$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/abis/Lottery.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SideMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MyPageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MyPageModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameExplainModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GameExplainModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
// --- Constants ---
const BNB_CHAIN_ID = '0x61';
const USDT_CONTRACT_ADDRESS = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd';
const API_BASE_URL = 'http://localhost:3001';
const usdtABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)",
    "function balanceOf(address account) public view returns (uint256)",
    "function transfer(address to, uint256 amount) public returns (bool)",
    "function transferFrom(address from, address to, uint256 amount) public returns (bool)",
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "function decimals() public view returns (uint8)"
];
const lotteryABI = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Lottery$2e$json__$28$json$29$__["default"].abi;
function RoomPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const roomId = params.roomId;
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lotteryStatus, setLotteryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roomConfig, setRoomConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [displayedLogs, setDisplayedLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimationRunning, setIsAnimationRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimationRun, setHasAnimationRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMyPageVisible, setIsMyPageVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExplainModalVisible, setIsExplainModalVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pastWinners, setPastWinners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("isExplainModalVisible: ", isExplainModalVisible);
    }, [
        isExplainModalVisible
    ]);
    const prevRoundIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lotteryStatus && lotteryStatus.globalRoundId !== prevRoundIdRef.current) {
            setHasAnimationRun(false);
            prevRoundIdRef.current = lotteryStatus.globalRoundId;
        }
    }, [
        lotteryStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!lotteryStatus?.deadline || lotteryStatus.status !== 'OPEN') {
            return;
        }
        const interval = setInterval(()=>{
            const now = new Date();
            const deadlineTime = new Date(lotteryStatus.deadline);
            const diff = deadlineTime.getTime() - now.getTime();
            if (diff <= 0) {
                // Optionally trigger a status refresh
                fetchStatus();
                return;
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        lotteryStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [
        displayedLogs
    ]);
    const addFrontendLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((type, message)=>{
        const newLog = {
            id: Math.random() * -100000,
            type,
            message,
            timestamp: new Date().toISOString()
        };
        setDisplayedLogs((prev)=>[
                ...prev,
                newLog
            ]);
    }, []);
    const fetchStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isAnimationRunning || !roomId) return;
        try {
            const response = await fetch(`${API_BASE_URL}/lottery-status/${roomId}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch lottery status.');
            }
            const data = await response.json();
            setLotteryStatus((prevStatus)=>{
                if (prevStatus && data.globalRoundId !== prevStatus.globalRoundId) {
                    setDisplayedLogs(data.logs);
                } else {
                    setDisplayedLogs((prevLogs)=>{
                        const existingIds = new Set(prevLogs.map((l)=>l.id));
                        let newLogs = data.logs.filter((log)=>!existingIds.has(log.id));
                        if (data.status === 'DRAWING' || isAnimationRunning) {
                            newLogs = newLogs.filter((log)=>log.type !== 'WINNER');
                        }
                        return [
                            ...prevLogs,
                            ...newLogs
                        ].sort((a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                    });
                }
                return data;
            });
            if (!roomConfig) {
                setRoomConfig({
                    name: data.name,
                    ticketPrice: data.ticketPrice,
                    contractAddress: data.contractAddress
                });
            }
        } catch (error) {
            setError(error.message);
        }
    }, [
        isAnimationRunning,
        roomId,
        roomConfig,
        addFrontendLog
    ]);
    const checkNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (window.ethereum) {
            const chainId = await window.ethereum.request({
                method: 'eth_chainId'
            });
            setIsCorrectNetwork(chainId === BNB_CHAIN_ID);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleAccountsChanged = (accounts)=>{
            const newAccount = accounts.length > 0 ? accounts[0] : null;
            setAccount(newAccount);
        };
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', checkNetwork);
            (async ()=>{
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts'
                });
                handleAccountsChanged(accounts);
                await checkNetwork();
            })();
            return ()=>{
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', checkNetwork);
            };
        }
    }, [
        checkNetwork
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lotteryStatus?.status === 'DRAWING' && !isAnimationRunning && !hasAnimationRun) {
            setIsAnimationRunning(true);
            setHasAnimationRun(true);
            const runDrawingSequence = async ()=>{
                addFrontendLog('SYSTEM', 'Draw starting in 3...');
                await new Promise((res)=>setTimeout(res, 1000));
                addFrontendLog('SYSTEM', 'Draw starting in 2...');
                await new Promise((res)=>setTimeout(res, 1000));
                addFrontendLog('SYSTEM', 'Draw starting in 1...');
                await new Promise((res)=>setTimeout(res, 1000));
                const players = lotteryStatus.players_snapshot ? JSON.parse(lotteryStatus.players_snapshot) : [];
                if (players.length > 0) {
                    const animationDuration = 5000;
                    const startTime = Date.now();
                    const animationInterval = setInterval(()=>{
                        if (Date.now() - startTime > animationDuration) {
                            clearInterval(animationInterval);
                            const closeRound = async ()=>{
                                addFrontendLog('SYSTEM', 'Verification complete. Announcing winner...');
                                const winnerLog = lotteryStatus.logs.find((l)=>l.type === 'WINNER');
                                if (winnerLog) setDisplayedLogs((prev)=>[
                                        ...prev,
                                        winnerLog
                                    ]);
                                else if (lotteryStatus.winner) addFrontendLog('WINNER', `🎉 Congratulations to the winner: ${lotteryStatus.winner}`);
                                await new Promise((res)=>setTimeout(res, 3000));
                                addFrontendLog('SYSTEM', 'This round is now closed. A new round will begin shortly.');
                                for(let i = 5; i > 0; i--){
                                    addFrontendLog('SYSTEM', `Clearing board in ${i}...`);
                                    await new Promise((res)=>setTimeout(res, 1000));
                                }
                                setDisplayedLogs([]);
                                setIsAnimationRunning(false);
                            };
                            closeRound();
                        } else {
                            const randomIndex = Math.floor(Math.random() * players.length);
                            addFrontendLog('PROCESS', `Verifying: ${players[randomIndex]}`);
                        }
                    }, 10);
                } else {
                    addFrontendLog('ERROR', 'No participants in the draw.');
                    setIsAnimationRunning(false);
                }
            };
            runDrawingSequence();
        }
    }, [
        lotteryStatus,
        isAnimationRunning,
        hasAnimationRun,
        addFrontendLog
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchWinners = async ()=>{
            if (!roomId) return;
            try {
                const response = await fetch(`${API_BASE_URL}/winners/${roomId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch winners');
                }
                const data = await response.json();
                setPastWinners(data);
            } catch (error) {
                console.error("Error fetching past winners:", error);
            // Optionally set an error state here to show in the UI
            }
        };
        fetchWinners();
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchStatus();
        const interval = setInterval(()=>{
            if (!isAnimationRunning) fetchStatus();
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        fetchStatus,
        isAnimationRunning
    ]);
    // Fetch balance whenever account changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (account) {
            const fetchBalance = async ()=>{
                try {
                    const response = await fetch(`${API_BASE_URL}/balance/${account}`);
                    if (response.ok) {
                        const data = await response.json();
                        setBalance(data.balance);
                    } else {
                        setBalance(0);
                    }
                } catch (error) {
                    console.error("Failed to fetch balance:", error);
                    setBalance(0);
                }
            };
            fetchBalance();
        } else {
            setBalance(0);
        }
    }, [
        account
    ]);
    const connectWallet = async ()=>{
        if (!window.ethereum) return setError('Please install MetaMask.');
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            setAccount(accounts[0]);
        } catch (error) {
            setError('Failed to connect wallet.');
        }
    };
    const handleOpenMyPage = ()=>{
        if (account) {
            setIsMyPageVisible(true);
        } else {
            alert('Please connect your wallet first.');
        }
    };
    const handleParticipate = async ()=>{
        if (!account || !isCorrectNetwork || !roomConfig) return;
        setIsProcessing(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/participate/${roomId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userAddress: account
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Participation failed.');
            }
            // Update balance and refetch status
            setBalance(data.newBalance);
            await fetchStatus();
        } catch (error) {
            setError(`Participation failed: ${error.message}`);
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                account: account,
                balance: balance,
                connectWallet: connectWallet
            }, void 0, false, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 335,
                columnNumber: 13
            }, this),
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-[#00000090] flex flex-col justify-center items-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                        lineNumber: 339,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white text-xl font-semibold",
                        children: "Processing Transaction..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                        lineNumber: 340,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 338,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-3 bg-gradient-to-r from-[#2C32AE] to-[#120D0D] border-y border-[#FFFFFF]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-2xl md:text-[32px] leading-normal [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] bg-gradient-to-r from-[#1ACFF8] to-[#EBFD62] bg-clip-text text-transparent",
                        children: [
                            "Global Round #",
                            lotteryStatus?.globalRoundId || '...'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                        lineNumber: 347,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/room/[roomId]/page.tsx",
                    lineNumber: 346,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 345,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col md:flex-row w-full gap-4 md:gap-8 p-4 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-2/3 flex flex-col gap-4 md:order-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl md:text-2xl font-bold text-yellow-400 p-4 bg-black/30 rounded-lg border border-gray-700 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        playsInline: true,
                                        className: "w-12 h-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: `/icon_room_${roomId}.webm`,
                                            type: "video/webm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 29
                                        }, this)
                                    }, roomId, false, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Prize Pool: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono",
                                                children: parseFloat(lotteryStatus?.prizePool || '0').toFixed(4)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 43
                                            }, this),
                                            " USDT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 354,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: logContainerRef,
                                className: "flex-grow rounded-lg p-4 bg-black/80 font-mono text-sm overflow-y-auto border border-gray-700 h-80 md:h-96",
                                children: displayedLogs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${log.type === 'WINNER' ? 'text-yellow-400 font-bold text-lg' : log.type === 'ERROR' ? 'text-red-500' : log.type === 'JOIN' ? 'text-blue-400' : log.type === 'PROCESS' ? 'text-green-400' : 'text-gray-400'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 mr-2",
                                                children: new Date(log.timestamp).toLocaleTimeString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: log.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 371,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, log.id || i, true, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 361,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                        lineNumber: 353,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/3 flex flex-col gap-4 p-4 bg-black/30 rounded-lg border border-gray-700 md:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl md:text-3xl font-bold text-center",
                                children: roomConfig?.name || 'Loading Room...'
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 379,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                deadline: lotteryStatus?.status === 'OPEN' ? lotteryStatus.deadline : null,
                                containerClassName: "text-4xl md:text-5xl text-center font-['LABDigital'] py-2 text-cyan-400 flex justify-center"
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 381,
                                columnNumber: 21
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs my-1 text-center",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 386,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleParticipate,
                                disabled: isProcessing || lotteryStatus?.status !== 'OPEN' || !account || !isCorrectNetwork,
                                className: "w-full text-white font-bold p-3 rounded-lg border-2 border-cyan-400 bg-black/50 hover:bg-cyan-400/20 disabled:bg-gray-700 disabled:border-gray-500 disabled:text-gray-400",
                                children: lotteryStatus?.status === 'OPEN' && roomConfig ? `Participate (${roomConfig.ticketPrice} USDT)` : `Round is ${lotteryStatus?.status || 'Loading...'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 388,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold mb-2",
                                        children: [
                                            "Participants (",
                                            lotteryStatus?.players?.length || 0,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/20 rounded p-2 h-40 md:h-48 overflow-y-auto border border-gray-800",
                                        children: lotteryStatus?.players?.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm truncate font-mono text-green-400",
                                                children: player
                                            }, index, false, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 77
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 397,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold mt-2 mb-2",
                                        children: "🏆 Round 우승자"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/20 rounded p-2 h-40 md:h-48 overflow-y-auto border border-gray-800",
                                        children: pastWinners.length > 0 ? pastWinners.map((winner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-sm py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Round ",
                                                            winner.global_round_id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono",
                                                        children: `${winner.winner.substring(0, 6)}...${winner.winner.slice(-4)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 37
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 text-center py-1",
                                            children: "No recent winners."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-lg hover:text-cyan-400",
                                                children: "◀"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-lg hover:text-cyan-400",
                                                children: "▶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                        lineNumber: 419,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                                lineNumber: 405,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/[roomId]/page.tsx",
                        lineNumber: 378,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 351,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onOpenMyPage: handleOpenMyPage,
                onOpenExplain: ()=>{
                    setIsExplainModalVisible(true);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 427,
                columnNumber: 13
            }, this),
            isMyPageVisible && account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MyPageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                account: account,
                onClose: ()=>setIsMyPageVisible(false),
                balance: balance,
                onBalanceUpdate: setBalance
            }, void 0, false, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 432,
                columnNumber: 17
            }, this),
            isExplainModalVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameExplainModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsExplainModalVisible(false),
                onConnectWallet: connectWallet
            }, void 0, false, {
                fileName: "[project]/src/app/room/[roomId]/page.tsx",
                lineNumber: 441,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/room/[roomId]/page.tsx",
        lineNumber: 334,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3e5fc9ae._.js.map