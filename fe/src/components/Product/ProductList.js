import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";
function ProductList() {
  const [data, setData] = useState();

  // Lấy danh sách sản phẩm
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setData(result.reverse());
    };

    fetchApi();
  });

  // Lưu sản phẩm
  const handSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct(data);
    if (result) {
      console.log("Thanh cong!");
    }
  };

  // Cập nhật thành công
  const handClick = async (e) => {
    e.preventDefault();
    const result = editProduct("id", "data");
    if (result) {
      console.log("Cập nhật thành công!");
    }
  };

  // Xóa sản phẩm
  const handDelete = async (e) => {
    e.preventDefault();
    const result = await deleteProduct("id");
    if (result) {
      console.log("Xóa thành công!");
    }
  };

  return (
    <>
      <h1>ProductList</h1>
    </>
  );
}

export default ProductList;
