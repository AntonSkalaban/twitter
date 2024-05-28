import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export const getDocsData = <T>(docs: QueryDocumentSnapshot<DocumentData, DocumentData>[]): T[] => {
  return docs.map((doc) => ({ id: doc.id, ...doc.data() }) as T);
};
