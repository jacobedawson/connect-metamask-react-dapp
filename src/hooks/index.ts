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
  const { state, send } = useContractFunction(contract, "incrementCount", {});
  const incrementCount = () => send();
  return { state, incrementCount };
}
