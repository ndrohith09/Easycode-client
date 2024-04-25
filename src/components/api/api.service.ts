import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetFlowNodesEdges() {
    const { data, error, status } = useQuery({
      queryKey: ["useGetFlowNodesEdges"],
      queryFn: getMyData,
    });
    console.log("useGetFlowNodesEdges", data, error, status);
    return { data, error, status };
  }
  
  async function getMyData() {
    const url = "http://localhost:8001/";
    console.log("useGetFlowNodesEdges getMyData");
    const nodes = await axios
      .get(url + "nodes")
      .then((res) => {
        console.log("useGetFlowNodesEdges res", res);
        return res.data;
      })
      .catch((err) => console.error(err));
  
    const edges = await axios
      .get(url + "edges")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error(err));
  
    console.log("getMyData blocks", nodes, edges);
  
    return { nodes, edges };
  }