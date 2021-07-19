import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import simpleContractAbi from "../abi/SimpleContract.json";
import { simpleContractAddress } from "../contracts";

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);
const contract = new Contract(simpleContractAddress, simpleContractInterface);

export function useCount() {
  const [count]: any =
    useContractCall({
      abi: simpleContractInterface,
      address: simpleContractAddress,
      method: "count",
      args: [],
    }) ?? [];
  console.log(count);
  return count;
}

export function useIncrement() {
  console.log("useIncrement");
  const { state, send } = useContractFunction(contract, "incrementCount", {});
  return { state, send };
}

export function useSetCount() {
  console.log("setCount");
  const { state, send } = useContractFunction(contract, "setCount", {});
  return { state, send };
}
