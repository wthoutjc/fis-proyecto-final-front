const deleteEntry = async (id: string) => {
  try {
    const res = await fetch(`${process.env.HOST_NAME}/filters/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export { deleteEntry };
