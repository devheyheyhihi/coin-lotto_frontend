(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/abis/Lottery.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"Lottery\",\"sourceName\":\"contracts/Lottery.sol\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_usdtAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_feeAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"}],\"name\":\"Entered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"}],\"name\":\"WinnerPicked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"TICKET_PRICE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlayers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPrizePool\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"participate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pickWinner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"players\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdt\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"bytecode\":\"0x60c06040523480156200001157600080fd5b506040516200127238038062001272833981810160405281019062000037919062000151565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505062000198565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200011982620000ec565b9050919050565b6200012b816200010c565b81146200013757600080fd5b50565b6000815190506200014b8162000120565b92915050565b600080604083850312156200016b576200016a620000e7565b5b60006200017b858286016200013a565b92505060206200018e858286016200013a565b9150509250929050565b60805160a05161108a620001e8600039600081816101c101526104a001526000818161019d0152818161022f015281816103c501528181610464015281816105cf0152610722015261108a6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063884bf67c11610066578063884bf67c146100fc5780638b5b9ccc1461011a5780638da5cb5b14610138578063d11711a214610156578063f71d96cb1461016057610093565b80631a95f15f146100985780632f48ab7d146100b657806341275358146100d45780635d495aea146100f2575b600080fd5b6100a0610190565b6040516100ad91906109b1565b60405180910390f35b6100be61019b565b6040516100cb9190610a4b565b60405180910390f35b6100dc6101bf565b6040516100e99190610a87565b60405180910390f35b6100fa6101e3565b005b6101046105cb565b60405161011191906109b1565b60405180910390f35b61012261066c565b60405161012f9190610b60565b60405180910390f35b6101406106fa565b60405161014d9190610a87565b60405180910390f35b61015e61071e565b005b61017a60048036038101906101759190610bb3565b6108b2565b6040516101879190610a87565b60405180910390f35b662386f26fc1000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001805490501161022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290610c63565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102869190610a87565b602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610c98565b90506000811161030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d11565b60405180910390fd5b6000600180549050424460018054905060405160200161032e93929190610d52565b6040516020818303038152906040528051906020012060001c6103519190610dbe565b905060006001828154811061036957610368610def565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064605a856103a79190610e4d565b6103b19190610e8f565b9050600081856103c19190610ec0565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161041e929190610ef4565b6020604051808303816000875af115801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610f55565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104dd929190610ef4565b6020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610f55565b50600067ffffffffffffffff81111561053c5761053b610f82565b5b60405190808252806020026020018201604052801561056a5781602001602082028036833780820191505090505b50600190805190602001906105809291906108f1565b508273ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106269190610a87565b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610c98565b905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106f057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a6575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330662386f26fc100006040518463ffffffff1660e01b815260040161078493929190610fb1565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190610f55565b905080610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611034565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f9d8f2d54c1a8ffb26973551e72794da9bd5b8529f24c494a6f1590d35d5e8ecf60405160405180910390a250565b600181815481106108c257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561096a579160200282015b828111156109695782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610911565b5b509050610977919061097b565b5090565b5b8082111561099457600081600090555060010161097c565b5090565b6000819050919050565b6109ab81610998565b82525050565b60006020820190506109c660008301846109a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a11610a0c610a07846109cc565b6109ec565b6109cc565b9050919050565b6000610a23826109f6565b9050919050565b6000610a3582610a18565b9050919050565b610a4581610a2a565b82525050565b6000602082019050610a606000830184610a3c565b92915050565b6000610a71826109cc565b9050919050565b610a8181610a66565b82525050565b6000602082019050610a9c6000830184610a78565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ad781610a66565b82525050565b6000610ae98383610ace565b60208301905092915050565b6000602082019050919050565b6000610b0d82610aa2565b610b178185610aad565b9350610b2283610abe565b8060005b83811015610b53578151610b3a8882610add565b9750610b4583610af5565b925050600181019050610b26565b5085935050505092915050565b60006020820190508181036000830152610b7a8184610b02565b905092915050565b600080fd5b610b9081610998565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600060208284031215610bc957610bc8610b82565b5b6000610bd784828501610b9e565b91505092915050565b600082825260208201905092915050565b7f4c6f74746572793a204e6f20706c617965727320746f207069636b206120776960008201527f6e6e65722066726f6d0000000000000000000000000000000000000000000000602082015250565b6000610c4d602983610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b600081519050610c9281610b87565b92915050565b600060208284031215610cae57610cad610b82565b5b6000610cbc84828501610c83565b91505092915050565b7f4c6f74746572793a205072697a6520706f6f6c20697320656d70747900000000600082015250565b6000610cfb601c83610be0565b9150610d0682610cc5565b602082019050919050565b60006020820190508181036000830152610d2a81610cee565b9050919050565b6000819050919050565b610d4c610d4782610998565b610d31565b82525050565b6000610d5e8286610d3b565b602082019150610d6e8285610d3b565b602082019150610d7e8284610d3b565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc982610998565b9150610dd483610998565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5882610998565b9150610e6383610998565b9250828202610e7181610998565b91508282048414831517610e8857610e87610e1e565b5b5092915050565b6000610e9a82610998565b9150610ea583610998565b925082610eb557610eb4610d8f565b5b828204905092915050565b6000610ecb82610998565b9150610ed683610998565b9250828203905081811115610eee57610eed610e1e565b5b92915050565b6000604082019050610f096000830185610a78565b610f1660208301846109a2565b9392505050565b60008115159050919050565b610f3281610f1d565b8114610f3d57600080fd5b50565b600081519050610f4f81610f29565b92915050565b600060208284031215610f6b57610f6a610b82565b5b6000610f7984828501610f40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000606082019050610fc66000830186610a78565b610fd36020830185610a78565b610fe060408301846109a2565b949350505050565b7f4c6f74746572793a2055534454207472616e73666572206661696c6564000000600082015250565b600061101e601d83610be0565b915061102982610fe8565b602082019050919050565b6000602082019050818103600083015261104d81611011565b905091905056fea26469706673582212209dbfec90135cbbcdd2062d033316d6af404761ba7346d3370303ed95e8c273fc64736f6c63430008180033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063884bf67c11610066578063884bf67c146100fc5780638b5b9ccc1461011a5780638da5cb5b14610138578063d11711a214610156578063f71d96cb1461016057610093565b80631a95f15f146100985780632f48ab7d146100b657806341275358146100d45780635d495aea146100f2575b600080fd5b6100a0610190565b6040516100ad91906109b1565b60405180910390f35b6100be61019b565b6040516100cb9190610a4b565b60405180910390f35b6100dc6101bf565b6040516100e99190610a87565b60405180910390f35b6100fa6101e3565b005b6101046105cb565b60405161011191906109b1565b60405180910390f35b61012261066c565b60405161012f9190610b60565b60405180910390f35b6101406106fa565b60405161014d9190610a87565b60405180910390f35b61015e61071e565b005b61017a60048036038101906101759190610bb3565b6108b2565b6040516101879190610a87565b60405180910390f35b662386f26fc1000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006001805490501161022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022290610c63565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102869190610a87565b602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610c98565b90506000811161030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d11565b60405180910390fd5b6000600180549050424460018054905060405160200161032e93929190610d52565b6040516020818303038152906040528051906020012060001c6103519190610dbe565b905060006001828154811061036957610368610def565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006064605a856103a79190610e4d565b6103b19190610e8f565b9050600081856103c19190610ec0565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b815260040161041e929190610ef4565b6020604051808303816000875af115801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610f55565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b81526004016104dd929190610ef4565b6020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190610f55565b50600067ffffffffffffffff81111561053c5761053b610f82565b5b60405190808252806020026020018201604052801561056a5781602001602082028036833780820191505090505b50600190805190602001906105809291906108f1565b508273ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106269190610a87565b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610c98565b905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106f057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106a6575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330662386f26fc100006040518463ffffffff1660e01b815260040161078493929190610fb1565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190610f55565b905080610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080090611034565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f9d8f2d54c1a8ffb26973551e72794da9bd5b8529f24c494a6f1590d35d5e8ecf60405160405180910390a250565b600181815481106108c257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805482825590600052602060002090810192821561096a579160200282015b828111156109695782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610911565b5b509050610977919061097b565b5090565b5b8082111561099457600081600090555060010161097c565b5090565b6000819050919050565b6109ab81610998565b82525050565b60006020820190506109c660008301846109a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a11610a0c610a07846109cc565b6109ec565b6109cc565b9050919050565b6000610a23826109f6565b9050919050565b6000610a3582610a18565b9050919050565b610a4581610a2a565b82525050565b6000602082019050610a606000830184610a3c565b92915050565b6000610a71826109cc565b9050919050565b610a8181610a66565b82525050565b6000602082019050610a9c6000830184610a78565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ad781610a66565b82525050565b6000610ae98383610ace565b60208301905092915050565b6000602082019050919050565b6000610b0d82610aa2565b610b178185610aad565b9350610b2283610abe565b8060005b83811015610b53578151610b3a8882610add565b9750610b4583610af5565b925050600181019050610b26565b5085935050505092915050565b60006020820190508181036000830152610b7a8184610b02565b905092915050565b600080fd5b610b9081610998565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600060208284031215610bc957610bc8610b82565b5b6000610bd784828501610b9e565b91505092915050565b600082825260208201905092915050565b7f4c6f74746572793a204e6f20706c617965727320746f207069636b206120776960008201527f6e6e65722066726f6d0000000000000000000000000000000000000000000000602082015250565b6000610c4d602983610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b600081519050610c9281610b87565b92915050565b600060208284031215610cae57610cad610b82565b5b6000610cbc84828501610c83565b91505092915050565b7f4c6f74746572793a205072697a6520706f6f6c20697320656d70747900000000600082015250565b6000610cfb601c83610be0565b9150610d0682610cc5565b602082019050919050565b60006020820190508181036000830152610d2a81610cee565b9050919050565b6000819050919050565b610d4c610d4782610998565b610d31565b82525050565b6000610d5e8286610d3b565b602082019150610d6e8285610d3b565b602082019150610d7e8284610d3b565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610dc982610998565b9150610dd483610998565b925082610de457610de3610d8f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e5882610998565b9150610e6383610998565b9250828202610e7181610998565b91508282048414831517610e8857610e87610e1e565b5b5092915050565b6000610e9a82610998565b9150610ea583610998565b925082610eb557610eb4610d8f565b5b828204905092915050565b6000610ecb82610998565b9150610ed683610998565b9250828203905081811115610eee57610eed610e1e565b5b92915050565b6000604082019050610f096000830185610a78565b610f1660208301846109a2565b9392505050565b60008115159050919050565b610f3281610f1d565b8114610f3d57600080fd5b50565b600081519050610f4f81610f29565b92915050565b600060208284031215610f6b57610f6a610b82565b5b6000610f7984828501610f40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000606082019050610fc66000830186610a78565b610fd36020830185610a78565b610fe060408301846109a2565b949350505050565b7f4c6f74746572793a2055534454207472616e73666572206661696c6564000000600082015250565b600061101e601d83610be0565b915061102982610fe8565b602082019050919050565b6000602082019050818103600083015261104d81611011565b905091905056fea26469706673582212209dbfec90135cbbcdd2062d033316d6af404761ba7346d3370303ed95e8c273fc64736f6c63430008180033\",\"linkReferences\":{},\"deployedLinkReferences\":{}}"));}),
"[project]/src/app/admin/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AdminPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Lottery$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/abis/Lottery.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const BNB_CHAIN_ID = '0x61';
const API_BASE_URL = 'http://localhost:3001';
const lotteryABI = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Lottery$2e$json__$28$json$29$__["default"].abi;
function AdminPage() {
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOwner, setIsOwner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Note: Now checks ownership of ANY room.
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // This function now only checks if the connected account is the owner of ANY of the lottery contracts.
    // The backend will handle the true authorization.
    const checkIsOwner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminPage.useCallback[checkIsOwner]": async ()=>{
            if (window.ethereum && isCorrectNetwork && account) {
                try {
                    const roomsResponse = await fetch("".concat(API_BASE_URL, "/rooms"));
                    const rooms = await roomsResponse.json();
                    if (!rooms || rooms.length === 0) {
                        throw new Error("Could not fetch room configurations.");
                    }
                    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
                    // Check ownership of the first contract as a proxy for all of them
                    // since the owner is the same for all contracts deployed by the script.
                    const lotteryContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(rooms[0].contractAddress, lotteryABI, provider);
                    const ownerAddress = await lotteryContract.owner();
                    setIsOwner(ownerAddress.toLowerCase() === account.toLowerCase());
                } catch (e) {
                    console.error("Could not check owner status:", e);
                    setIsOwner(false);
                }
            } else {
                setIsOwner(false);
            }
        }
    }["AdminPage.useCallback[checkIsOwner]"], [
        account,
        isCorrectNetwork
    ]);
    const checkNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminPage.useCallback[checkNetwork]": async ()=>{
            if (window.ethereum) {
                try {
                    const chainId = await window.ethereum.request({
                        method: 'eth_chainId'
                    });
                    setIsCorrectNetwork(chainId === BNB_CHAIN_ID);
                } catch (error) {
                    console.error("Failed to check network:", error);
                    setIsCorrectNetwork(false);
                }
            }
        }
    }["AdminPage.useCallback[checkNetwork]"], []);
    const connectWallet = async ()=>{
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                setAccount(accounts[0]);
            } catch (err) {
                console.error("Error connecting to MetaMask", err);
                setError("Error connecting to MetaMask.");
            }
        } else {
            setError('Please install MetaMask.');
        }
    };
    const handleStartDrawAll = async ()=>{
        setIsProcessing(true);
        setError(null);
        setSuccessMessage(null);
        try {
            const response = await fetch("".concat(API_BASE_URL, "/start-draw-all"), {
                method: 'POST'
            });
            const data = await response.json();
            if (data.success) {
                setSuccessMessage(data.message || "Draw process for all rooms has been initiated.");
            } else {
                throw new Error(data.message || "An unknown error occurred on the server.");
            }
        } catch (err) {
            console.error("Failed to start draws:", err);
            setError("Error: ".concat(err.message));
        } finally{
            setIsProcessing(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            const handleAccountsChanged = {
                "AdminPage.useEffect.handleAccountsChanged": (accounts)=>{
                    setAccount(accounts.length > 0 ? accounts[0] : null);
                }
            }["AdminPage.useEffect.handleAccountsChanged"];
            const handleChainChanged = {
                "AdminPage.useEffect.handleChainChanged": ()=>checkNetwork()
            }["AdminPage.useEffect.handleChainChanged"];
            if (window.ethereum) {
                window.ethereum.on('accountsChanged', handleAccountsChanged);
                window.ethereum.on('chainChanged', handleChainChanged);
                ({
                    "AdminPage.useEffect": async ()=>{
                        const accounts = await window.ethereum.request({
                            method: 'eth_accounts'
                        });
                        handleAccountsChanged(accounts);
                        await checkNetwork();
                    }
                })["AdminPage.useEffect"]();
                return ({
                    "AdminPage.useEffect": ()=>{
                        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                        window.ethereum.removeListener('chainChanged', handleChainChanged);
                    }
                })["AdminPage.useEffect"];
            }
        }
    }["AdminPage.useEffect"], [
        checkNetwork
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            checkIsOwner();
        }
    }["AdminPage.useEffect"], [
        account,
        isCorrectNetwork,
        checkIsOwner
    ]);
    const renderContent = ()=>{
        if (!account) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: connectWallet,
                className: "px-8 py-4 bg-blue-600 text-white font-bold text-2xl rounded-lg hover:bg-blue-500",
                children: "Connect Wallet"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 129,
                columnNumber: 14
            }, this);
        }
        if (!isCorrectNetwork) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-yellow-400",
                children: "Please switch to BNB Testnet."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 132,
                columnNumber: 14
            }, this);
        }
        if (!isOwner) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: "You are not the owner of the contracts."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 135,
                columnNumber: 16
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleStartDrawAll,
            disabled: isProcessing,
            className: "px-8 py-4 bg-red-600 text-white font-bold text-2xl rounded-lg hover:bg-red-500 disabled:bg-gray-600",
            children: isProcessing ? 'Initiating Draws...' : 'Start Draw For All Rooms'
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 138,
            columnNumber: 9
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4",
        children: [
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white text-xl font-semibold",
                        children: "Processing Request..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 left-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-blue-400 hover:underline",
                    children: "← Back to Lobby"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 157,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-bold mb-8",
                        children: "Global Admin Panel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            renderContent(),
                            successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-400 mt-4 text-lg",
                                children: successMessage
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 163,
                                columnNumber: 36
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 mt-4",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 164,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "Zg3EyZPLVDnGHwFTJK+SWKmtwxY=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1cb04156._.js.map