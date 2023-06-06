const create = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

const findAll = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

const clubController = { create, findAll };

export default clubController;
