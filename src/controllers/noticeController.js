import Notice from "../models/notice";

export const noticeList = async (req, res) => {
  try {
    // await Notice.find({});
    return res.send({ name: "list" });
  } catch (error) {
    console.log(error);
  }
};

export const noticeWrite = async (req, res) => {
  try {
    const { title, description, writer } = req.body;
    const data = await Notice.create({
      title,
      description,
      writer,
      createdAt: Date.now(),
    });
    return res.send({ result: true, data });
  } catch (err) {
    console.log(err);
    return res.send({ err, result: false });
  }
};
export const noticeDetail = (req, res) => res.send({ name: "detail" });
export const noticeEdit = (req, res) => res.send({ name: "edit" });
export const noticeDelete = (req, res) => res.send({ name: "delete" });
