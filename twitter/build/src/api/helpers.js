export const getDocsData = (docs) => {
    return docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
