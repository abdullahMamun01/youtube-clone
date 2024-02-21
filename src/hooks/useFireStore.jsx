import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getData = async (collectionName) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const addData = async (data, collectionName) => {
  const collectionHref = collection(db, collectionName);
  try {
    await addDoc(collectionHref, data);
  } catch (e) {
    console.log(e.message);
  }
};

const useFireStore = (collectionName) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["data", collectionName],
    queryFn: async () => await getData(collectionName),
  });

  const addMutation = useMutation({
    mutationFn: async ({ data, collectionName }) =>
      await addData(data, collectionName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["data", collectionName] });
    },
  });

  return {
    data,
    addData: addMutation.mutate,
  };
};

export default useFireStore;
