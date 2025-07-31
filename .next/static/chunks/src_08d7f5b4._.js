(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/abis/Lottery.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"Lottery\",\"sourceName\":\"contracts/Lottery.sol\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_usdtAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_feeAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"}],\"name\":\"Entered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"}],\"name\":\"WinnerPicked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"TICKET_PRICE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlayers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPrizePool\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"participate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pickWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"players\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdt\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"bytecode\":\"0x60c06040523480156200001157600080fd5b506040516200127238038062001272833981810160405281019062000037919062000151565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505062000198565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200011982620000ec565b9050919050565b6200012b816200010c565b81146200013757600080fd5b50565b6000815190506200014b8162000120565b92915050565b600080604083850312156200016b576200016a620000e7565b5b60006200017b858286016200013a565b92505060206200018e858286016200013a565b9150509250929050565b60805160a05161108a620001e8600039600081816101c101526104a001526000818161019d0152818161022f015281816103c501528181610464015281816105cf0152610722015261108a6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063884bf67c11610066578063884bf67c146100fc5780638b5b9ccc1461011a5780638da5cb5b14610138578063d11711a214610156578063f71d96cb1461016057610093565b80631a95f15f146100985780632f48ab7d146100b657806341275358146100d45780635d495aea146100f2575b600080fd5b6100a0610190565b6040516100ad91906109b1565b60405180910390f35b6100be61019b565b6040516100cb9190610a4b565b60405180910390f35b6100dc6101bf565b6040516100e99190610a87565b60405180910390f35b6100fa6101e3565b005b6101046105cb565b60405161011191906109b1565b60405180910390f35b61012261066c565b60405161012f9190610b60565b60405180910390f35b6101406106fa565b60405161014d9190610a87565b60405180910390f35b61015e61071e565b005b61017a60048036038101906101759190610bb3565b6108b2565b6040516101879190610a87565b60405180910390f35b662386f26fc1000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001805490501161022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290610c63565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102869190610a87565b602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610c98565b90506000811161030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d11565b60405180910390fd5b6000600180549050424460018054905060405160200161032e93929190610d52565b6040516020818303038152906040528051906020012060001c6103519190610dbe565b905060006001828154811061036957610368610def565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064605a856103a79190610e4d565b6103b19190610e8f565b9050600081856103c19190610ec0565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161041e929190610ef4565b6020604051808303816000875af115801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610f55565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104dd929190610ef4565b6020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610f55565b50600067ffffffffffffffff81111561053c5761053b610f82565b5b60405190808252806020026020018201604052801561056a5781602001602082028036833780820191505090505b50600190805190602001906105809291906108f1565b508273ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106269190610a87565b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610c98565b905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106f057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a6575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330662386f26fc100006040518463ffffffff1660e01b815260040161078493929190610fb1565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190610f55565b905080610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611034565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f9d8f2d54c1a8ffb26973551e72794da9bd5b8529f24c494a6f1590d35d5e8ecf60405160405180910390a250565b600181815481106108c257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561096a579160200282015b828111156109695782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610911565b5b509050610977919061097b565b5090565b5b8082111561099457600081600090555060010161097c565b5090565b6000819050919050565b6109ab81610998565b82525050565b60006020820190506109c660008301846109a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a11610a0c610a07846109cc565b6109ec565b6109cc565b9050919050565b6000610a23826109f6565b9050919050565b6000610a3582610a18565b9050919050565b610a4581610a2a565b82525050565b6000602082019050610a606000830184610a3c565b92915050565b6000610a71826109cc565b9050919050565b610a8181610a66565b82525050565b6000602082019050610a9c6000830184610a78565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ad781610a66565b82525050565b6000610ae98383610ace565b60208301905092915050565b6000602082019050919050565b6000610b0d82610aa2565b610b178185610aad565b9350610b2283610abe565b8060005b83811015610b53578151610b3a8882610add565b9750610b4583610af5565b925050600181019050610b26565b5085935050505092915050565b60006020820190508181036000830152610b7a8184610b02565b905092915050565b600080fd5b610b9081610998565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600060208284031215610bc957610bc8610b82565b5b6000610bd784828501610b9e565b91505092915050565b600082825260208201905092915050565b7f4c6f74746572793a204e6f20706c617965727320746f207069636b206120776960008201527f6e6e65722066726f6d0000000000000000000000000000000000000000000000602082015250565b6000610c4d602983610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b600081519050610c9281610b87565b92915050565b600060208284031215610cae57610cad610b82565b5b6000610cbc84828501610c83565b91505092915050565b7f4c6f74746572793a205072697a6520706f6f6c20697320656d70747900000000600082015250565b6000610cfb601c83610be0565b9150610d0682610cc5565b602082019050919050565b60006020820190508181036000830152610d2a81610cee565b9050919050565b6000819050919050565b610d4c610d4782610998565b610d31565b82525050565b6000610d5e8286610d3b565b602082019150610d6e8285610d3b565b602082019150610d7e8284610d3b565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc982610998565b9150610dd483610998565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5882610998565b9150610e6383610998565b9250828202610e7181610998565b91508282048414831517610e8857610e87610e1e565b5b5092915050565b6000610e9a82610998565b9150610ea583610998565b925082610eb557610eb4610d8f565b5b828204905092915050565b6000610ecb82610998565b9150610ed683610998565b9250828203905081811115610eee57610eed610e1e565b5b92915050565b6000604082019050610f096000830185610a78565b610f1660208301846109a2565b9392505050565b60008115159050919050565b610f3281610f1d565b8114610f3d57600080fd5b50565b600081519050610f4f81610f29565b92915050565b600060208284031215610f6b57610f6a610b82565b5b6000610f7984828501610f40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000606082019050610fc66000830186610a78565b610fd36020830185610a78565b610fe060408301846109a2565b949350505050565b7f4c6f74746572793a2055534454207472616e73666572206661696c6564000000600082015250565b600061101e601d83610be0565b915061102982610fe8565b602082019050919050565b6000602082019050818103600083015261104d81611011565b905091905056fea26469706673582212209dbfec90135cbbcdd2062d033316d6af404761ba7346d3370303ed95e8c273fc64736f6c63430008180033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063884bf67c11610066578063884bf67c146100fc5780638b5b9ccc1461011a5780638da5cb5b14610138578063d11711a214610156578063f71d96cb1461016057610093565b80631a95f15f146100985780632f48ab7d146100b657806341275358146100d45780635d495aea146100f2575b600080fd5b6100a0610190565b6040516100ad91906109b1565b60405180910390f35b6100be61019b565b6040516100cb9190610a4b565b60405180910390f35b6100dc6101bf565b6040516100e99190610a87565b60405180910390f35b6100fa6101e3565b005b6101046105cb565b60405161011191906109b1565b60405180910390f35b61012261066c565b60405161012f9190610b60565b60405180910390f35b6101406106fa565b60405161014d9190610a87565b60405180910390f35b61015e61071e565b005b61017a60048036038101906101759190610bb3565b6108b2565b6040516101879190610a87565b60405180910390f35b662386f26fc1000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001805490501161022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290610c63565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102869190610a87565b602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610c98565b90506000811161030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d11565b60405180910390fd5b6000600180549050424460018054905060405160200161032e93929190610d52565b6040516020818303038152906040528051906020012060001c6103519190610dbe565b905060006001828154811061036957610368610def565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064605a856103a79190610e4d565b6103b19190610e8f565b9050600081856103c19190610ec0565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161041e929190610ef4565b6020604051808303816000875af115801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610f55565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104dd929190610ef4565b6020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610f55565b50600067ffffffffffffffff81111561053c5761053b610f82565b5b60405190808252806020026020018201604052801561056a5781602001602082028036833780820191505090505b50600190805190602001906105809291906108f1565b508273ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106269190610a87565b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610c98565b905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106f057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a6575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330662386f26fc100006040518463ffffffff1660e01b815260040161078493929190610fb1565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190610f55565b905080610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611034565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f9d8f2d54c1a8ffb26973551e72794da9bd5b8529f24c494a6f1590d35d5e8ecf60405160405180910390a250565b600181815481106108c257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561096a579160200282015b828111156109695782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610911565b5b509050610977919061097b565b5090565b5b8082111561099457600081600090555060010161097c565b5090565b6000819050919050565b6109ab81610998565b82525050565b60006020820190506109c660008301846109a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a11610a0c610a07846109cc565b6109ec565b6109cc565b9050919050565b6000610a23826109f6565b9050919050565b6000610a3582610a18565b9050919050565b610a4581610a2a565b82525050565b6000602082019050610a606000830184610a3c565b92915050565b6000610a71826109cc565b9050919050565b610a8181610a66565b82525050565b6000602082019050610a9c6000830184610a78565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ad781610a66565b82525050565b6000610ae98383610ace565b60208301905092915050565b6000602082019050919050565b6000610b0d82610aa2565b610b178185610aad565b9350610b2283610abe565b8060005b83811015610b53578151610b3a8882610add565b9750610b4583610af5565b925050600181019050610b26565b5085935050505092915050565b60006020820190508181036000830152610b7a8184610b02565b905092915050565b600080fd5b610b9081610998565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600060208284031215610bc957610bc8610b82565b5b6000610bd784828501610b9e565b91505092915050565b600082825260208201905092915050565b7f4c6f74746572793a204e6f20706c617965727320746f207069636b206120776960008201527f6e6e65722066726f6d0000000000000000000000000000000000000000000000602082015250565b6000610c4d602983610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b600081519050610c9281610b87565b92915050565b600060208284031215610cae57610cad610b82565b5b6000610cbc84828501610c83565b91505092915050565b7f4c6f74746572793a205072697a6520706f6f6c20697320656d70747900000000600082015250565b6000610cfb601c83610be0565b9150610d0682610cc5565b602082019050919050565b60006020820190508181036000830152610d2a81610cee565b9050919050565b6000819050919050565b610d4c610d4782610998565b610d31565b82525050565b6000610d5e8286610d3b565b602082019150610d6e8285610d3b565b602082019150610d7e8284610d3b565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc982610998565b9150610dd483610998565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5882610998565b9150610e6383610998565b9250828202610e7181610998565b91508282048414831517610e8857610e87610e1e565b5b5092915050565b6000610e9a82610998565b9150610ea583610998565b925082610eb557610eb4610d8f565b5b828204905092915050565b6000610ecb82610998565b9150610ed683610998565b9250828203905081811115610eee57610eed610e1e565b5b92915050565b6000604082019050610f096000830185610a78565b610f1660208301846109a2565b9392505050565b60008115159050919050565b610f3281610f1d565b8114610f3d57600080fd5b50565b600081519050610f4f81610f29565b92915050565b600060208284031215610f6b57610f6a610b82565b5b6000610f7984828501610f40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000606082019050610fc66000830186610a78565b610fd36020830185610a78565b610fe060408301846109a2565b949350505050565b7f4c6f74746572793a2055534454207472616e73666572206661696c6564000000600082015250565b600061101e601d83610be0565b915061102982610fe8565b602082019050919050565b6000602082019050818103600083015261104d81611011565b905091905056fea26469706673582212209dbfec90135cbbcdd2062d033316d6af404761ba7346d3370303ed95e8c273fc64736f6c63430008180033\",\"linkReferences\":{},\"deployedLinkReferences\":{}}"));}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Lottery$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/abis/Lottery.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// --- Constants ---
const BNB_CHAIN_ID = '0x61';
const LOTTERY_CONTRACT_ADDRESS = '0x7607b6009267e6d64a76740686a74AEAE8EB06ce';
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
const lotteryABI = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Lottery$2e$json__$28$json$29$__["default"].abi; // Extract only the abi array
function Home() {
    var _lotteryStatus_players, _lotteryStatus_players1;
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOwner, setIsOwner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lotteryStatus, setLotteryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [displayedLogs, setDisplayedLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimationRunning, setIsAnimationRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimationRun, setHasAnimationRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevRoundIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (lotteryStatus && lotteryStatus.id !== prevRoundIdRef.current) {
                setHasAnimationRun(false); // New round, reset animation flag
                prevRoundIdRef.current = lotteryStatus.id;
            }
        }
    }["Home.useEffect"], [
        lotteryStatus
    ]);
    // --- Utility: Auto-scroll logs ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (logContainerRef.current) {
                logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
            }
        }
    }["Home.useEffect"], [
        displayedLogs
    ]);
    const addFrontendLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[addFrontendLog]": (type, message)=>{
            // Use a random negative number for frontend-only logs to avoid collision with DB IDs
            // and to allow sorting by timestamp primarily.
            const newLog = {
                id: Math.random() * -100000,
                type,
                message,
                timestamp: new Date().toISOString()
            };
            setDisplayedLogs({
                "Home.useCallback[addFrontendLog]": (prev)=>[
                        ...prev,
                        newLog
                    ]
            }["Home.useCallback[addFrontendLog]"]);
        }
    }["Home.useCallback[addFrontendLog]"], []);
    // --- State & Data Fetching ---
    const fetchStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchStatus]": async ()=>{
            if (isAnimationRunning) return;
            try {
                const response = await fetch("".concat(API_BASE_URL, "/lottery-status"));
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setLotteryStatus(data);
                // Log management is now simpler: just add new logs.
                // Clearing is handled by the closing sequence after a draw.
                setDisplayedLogs({
                    "Home.useCallback[fetchStatus]": (prevLogs)=>{
                        const existingIds = new Set(prevLogs.map({
                            "Home.useCallback[fetchStatus]": (l)=>l.id
                        }["Home.useCallback[fetchStatus]"]));
                        let newLogs = data.logs.filter({
                            "Home.useCallback[fetchStatus].newLogs": (log)=>!existingIds.has(log.id)
                        }["Home.useCallback[fetchStatus].newLogs"]);
                        // While drawing, hide the winner log until the animation is complete
                        if (data.status === 'DRAWING' || isAnimationRunning) {
                            newLogs = newLogs.filter({
                                "Home.useCallback[fetchStatus]": (log)=>log.type !== 'WINNER'
                            }["Home.useCallback[fetchStatus]"]);
                        }
                        return [
                            ...prevLogs,
                            ...newLogs
                        ].sort({
                            "Home.useCallback[fetchStatus]": (a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
                        }["Home.useCallback[fetchStatus]"]);
                    }
                }["Home.useCallback[fetchStatus]"]);
            } catch (error) {
                console.error("Failed to fetch lottery status:", error);
                setError('Failed to connect to server.');
            }
        }
    }["Home.useCallback[fetchStatus]"], [
        isAnimationRunning
    ]);
    // --- Web3 Callbacks & Lifecycle ---
    const checkNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[checkNetwork]": async ()=>{
            if (window.ethereum) {
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId'
                });
                setIsCorrectNetwork(chainId === BNB_CHAIN_ID);
            }
        }
    }["Home.useCallback[checkNetwork]"], []);
    const checkOwner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[checkOwner]": async (currentAccount)=>{
            if (window.ethereum && currentAccount && isCorrectNetwork) {
                const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
                const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(LOTTERY_CONTRACT_ADDRESS, lotteryABI, provider);
                const ownerAddress = await contract.owner();
                setIsOwner(ownerAddress.toLowerCase() === currentAccount.toLowerCase());
            } else {
                setIsOwner(false);
            }
        }
    }["Home.useCallback[checkOwner]"], [
        isCorrectNetwork
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleAccountsChanged = {
                "Home.useEffect.handleAccountsChanged": (accounts)=>{
                    const newAccount = accounts.length > 0 ? accounts[0] : null;
                    setAccount(newAccount);
                    if (newAccount) checkOwner(newAccount);
                    else setIsOwner(false);
                }
            }["Home.useEffect.handleAccountsChanged"];
            if (window.ethereum) {
                window.ethereum.on('accountsChanged', handleAccountsChanged);
                window.ethereum.on('chainChanged', checkNetwork);
                ({
                    "Home.useEffect": async ()=>{
                        const accounts = await window.ethereum.request({
                            method: 'eth_accounts'
                        });
                        handleAccountsChanged(accounts);
                        await checkNetwork();
                    }
                })["Home.useEffect"]();
                return ({
                    "Home.useEffect": ()=>{
                        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                        window.ethereum.removeListener('chainChanged', checkNetwork);
                    }
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        checkNetwork,
        checkOwner
    ]);
    // --- Main Drawing and Polling Logic ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Condition to start the animation
            if ((lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) === 'DRAWING' && !isAnimationRunning && !hasAnimationRun) {
                setIsAnimationRunning(true);
                setHasAnimationRun(true); // Mark that animation has run for this round
                const runDrawingSequence = {
                    "Home.useEffect.runDrawingSequence": async ()=>{
                        // 1. Countdown
                        addFrontendLog('SYSTEM', 'Draw starting in 3...');
                        await new Promise({
                            "Home.useEffect.runDrawingSequence": (res)=>setTimeout(res, 1000)
                        }["Home.useEffect.runDrawingSequence"]);
                        addFrontendLog('SYSTEM', 'Draw starting in 2...');
                        await new Promise({
                            "Home.useEffect.runDrawingSequence": (res)=>setTimeout(res, 1000)
                        }["Home.useEffect.runDrawingSequence"]);
                        addFrontendLog('SYSTEM', 'Draw starting in 1...');
                        await new Promise({
                            "Home.useEffect.runDrawingSequence": (res)=>setTimeout(res, 1000)
                        }["Home.useEffect.runDrawingSequence"]);
                        // 2. Scrolling Animation
                        const players = lotteryStatus.players_snapshot ? JSON.parse(lotteryStatus.players_snapshot) : [];
                        if (players.length > 0) {
                            const animationDuration = 5000; // 5 seconds of scrolling
                            const startTime = Date.now();
                            const animationInterval = setInterval({
                                "Home.useEffect.runDrawingSequence.animationInterval": ()=>{
                                    if (Date.now() - startTime > animationDuration) {
                                        clearInterval(animationInterval);
                                        // --- Round Closing Sequence ---
                                        const closeRound = {
                                            "Home.useEffect.runDrawingSequence.animationInterval.closeRound": async ()=>{
                                                addFrontendLog('SYSTEM', 'Verification complete. Announcing winner...');
                                                // Reveal the winner log from the server data
                                                const winnerLog = lotteryStatus.logs.find({
                                                    "Home.useEffect.runDrawingSequence.animationInterval.closeRound.winnerLog": (l)=>l.type === 'WINNER'
                                                }["Home.useEffect.runDrawingSequence.animationInterval.closeRound.winnerLog"]);
                                                if (winnerLog) {
                                                    setDisplayedLogs({
                                                        "Home.useEffect.runDrawingSequence.animationInterval.closeRound": (prev)=>[
                                                                ...prev,
                                                                winnerLog
                                                            ]
                                                    }["Home.useEffect.runDrawingSequence.animationInterval.closeRound"]);
                                                } else if (lotteryStatus.winner) {
                                                    addFrontendLog('WINNER', "🎉 Congratulations to the winner: ".concat(lotteryStatus.winner));
                                                }
                                                // Wait a moment for the user to see the winner
                                                await new Promise({
                                                    "Home.useEffect.runDrawingSequence.animationInterval.closeRound": (res)=>setTimeout(res, 3000)
                                                }["Home.useEffect.runDrawingSequence.animationInterval.closeRound"]);
                                                addFrontendLog('SYSTEM', 'This round is now closed. A new round will begin shortly.');
                                                // Countdown before clearing logs
                                                for(let i = 5; i > 0; i--){
                                                    addFrontendLog('SYSTEM', "Clearing board in ".concat(i, "..."));
                                                    await new Promise({
                                                        "Home.useEffect.runDrawingSequence.animationInterval.closeRound": (res)=>setTimeout(res, 1000)
                                                    }["Home.useEffect.runDrawingSequence.animationInterval.closeRound"]);
                                                }
                                                setDisplayedLogs([]); // Clear all logs
                                                setIsAnimationRunning(false); // Allow polling to fetch the new round
                                            }
                                        }["Home.useEffect.runDrawingSequence.animationInterval.closeRound"];
                                        closeRound();
                                    } else {
                                        const randomIndex = Math.floor(Math.random() * players.length);
                                        addFrontendLog('PROCESS', "Verifying: ".concat(players[randomIndex]));
                                    }
                                }
                            }["Home.useEffect.runDrawingSequence.animationInterval"], 100);
                        } else {
                            addFrontendLog('ERROR', 'No participants in the draw.');
                            setIsAnimationRunning(false);
                        }
                    }
                }["Home.useEffect.runDrawingSequence"];
                runDrawingSequence();
            }
        }
    }["Home.useEffect"], [
        lotteryStatus,
        isAnimationRunning,
        hasAnimationRun,
        addFrontendLog
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchStatus(); // Initial fetch
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    if (!isAnimationRunning) {
                        fetchStatus();
                    }
                }
            }["Home.useEffect.interval"], 3000); // Poll slightly faster to catch state changes
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        fetchStatus,
        isAnimationRunning
    ]);
    // --- User Actions ---
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
    const handleParticipate = async ()=>{
        if (!account || !isCorrectNetwork) return;
        setIsProcessing(true);
        setError(null);
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const usdtContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(USDT_CONTRACT_ADDRESS, usdtABI, signer);
            const lotteryContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(LOTTERY_CONTRACT_ADDRESS, lotteryABI, signer);
            const participationFee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseUnits("0.01", 18);
            // Check USDT balance first
            const balance = await usdtContract.balanceOf(account);
            if (balance < participationFee) {
                throw new Error("Insufficient USDT balance. You have ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatUnits(balance, 18), " USDT, but need 0.01 USDT."));
            }
            // Check allowance
            const allowance = await usdtContract.allowance(account, LOTTERY_CONTRACT_ADDRESS);
            console.log("Current allowance: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatUnits(allowance, 18), " USDT"));
            if (allowance < participationFee) {
                console.log('Approving USDT...');
                const approveTx = await usdtContract.approve(LOTTERY_CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].MaxUint256);
                await approveTx.wait();
                console.log('USDT approved successfully');
            }
            console.log('Participating in lottery...');
            const participateTx = await lotteryContract.participate();
            await participateTx.wait();
            console.log('Participation successful');
            await fetch("".concat(API_BASE_URL, "/participate"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userAddress: account
                })
            });
            await fetchStatus();
        } catch (error) {
            var _error_error;
            console.error('Participation error:', error);
            let errorMessage = 'Participation failed';
            if (error.reason) {
                errorMessage += ": ".concat(error.reason);
            } else if (error.message) {
                errorMessage += ": ".concat(error.message);
            } else if ((_error_error = error.error) === null || _error_error === void 0 ? void 0 : _error_error.message) {
                errorMessage += ": ".concat(error.error.message);
            }
            setError(errorMessage);
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-900 text-white font-sans",
        children: [
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white text-xl font-semibold",
                        children: "Processing Transaction..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 299,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/3 border-r border-gray-700 flex flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-4",
                        children: "Lotto Game"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg text-yellow-400 mb-4",
                        children: [
                            "Prize Pool: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: parseFloat((lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.prizePool) || '0').toFixed(4)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 308,
                                columnNumber: 33
                            }, this),
                            " USDT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 307,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm bg-green-500 rounded px-2 py-1",
                                    children: "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 29
                                }, this),
                                isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "text-sm bg-red-600 rounded px-2 py-1",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/history",
                                    className: "text-sm bg-blue-600 rounded px-2 py-1",
                                    children: "History"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 312,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: connectWallet,
                            className: "w-full bg-blue-600 p-2 rounded",
                            children: "Connect Wallet"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 318,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs my-2",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 321,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleParticipate,
                        disabled: isProcessing || (lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) !== 'OPEN' || !account || !isCorrectNetwork,
                        className: "w-full bg-yellow-500 text-black font-bold p-3 rounded disabled:bg-gray-600",
                        children: (lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) === 'OPEN' ? 'Participate (0.01 USDT)' : "Round is ".concat((lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) || 'Loading...')
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 322,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mt-6 mb-2",
                        children: [
                            "Participants (",
                            (lotteryStatus === null || lotteryStatus === void 0 ? void 0 : (_lotteryStatus_players = lotteryStatus.players) === null || _lotteryStatus_players === void 0 ? void 0 : _lotteryStatus_players.length) || 0,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 329,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800 rounded p-2 flex-grow overflow-y-auto",
                        children: lotteryStatus === null || lotteryStatus === void 0 ? void 0 : (_lotteryStatus_players1 = lotteryStatus.players) === null || _lotteryStatus_players1 === void 0 ? void 0 : _lotteryStatus_players1.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm truncate font-mono",
                                children: player
                            }, index, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 331,
                                columnNumber: 69
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 330,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2/3 flex flex-col h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: logContainerRef,
                    className: "flex-grow p-4 bg-black font-mono text-sm h-full overflow-y-auto",
                    children: displayedLogs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(log.type === 'WINNER' ? 'text-yellow-400 font-bold text-lg' : log.type === 'ERROR' ? 'text-red-500' : log.type === 'JOIN' ? 'text-blue-400' : log.type === 'PROCESS' ? 'text-green-400' : 'text-gray-400'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600 mr-2",
                                    children: new Date(log.timestamp).toLocaleTimeString()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: log.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, log.id || i, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 339,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 337,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 336,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 297,
        columnNumber: 9
    }, this);
}
_s(Home, "QRl0YBvobDBokcuTKmsLQvJDq0g=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_08d7f5b4._.js.map