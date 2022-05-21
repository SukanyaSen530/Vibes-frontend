export const fileUpload = (files) => {
  const fd = new FormData();
  Array.from(files).forEach((file) => {
    fd.append("image", file);
  });
  return fd;
};
