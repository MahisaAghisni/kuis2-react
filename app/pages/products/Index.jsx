import React from "react";
import { app, db } from "../../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ProductsIndex = () => {
  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    const pro = onSnapshot(collection(db, "products"), (snapshot) => {
      setProduct(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return pro;
  }, []);

  console.log(products);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      MySwal.fire({
        icon: 'success',
        title: 'Data deleted successfully',
        text: `Your data has been deleted successfully`,
      });
    } catch (error) {
      console.log(error);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="relative overflow-x-auto p-5">
      <div className="p-4">

      <Link
        to="/products/create"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-5"
      >
        Tambah Products
      </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama products
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, index) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{index + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {pro.name}
              </th>
              <td className="px-6 py-4">{pro.price}</td>
              <td className="px-6 py-4">{pro.quantity}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/products/edit/${pro.id}`}
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Edit
                </Link>
                <button 
                onClick={() => handleDelete(pro.id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsIndex;
