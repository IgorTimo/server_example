import { Contract } from "ethers";
import defaultProvider from "./defaultProvider";


const abi = [
  // "function getHashsOfRecords() public view returns (string[])"
  {
    inputs: [{ internalType: "string", name: "hash", type: "string" }],
    name: "addRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashsOfRecords",
    outputs: [{ internalType: "string[]", name: "", type: "string[]" }],
    stateMutability: "view",
    type: "function",
  },
];
const address = "0x10C47ddfdF7EA1ff2A3da1A811bFcBa904D43c83";

const diary = new Contract(address, abi, defaultProvider);

export default diary;
