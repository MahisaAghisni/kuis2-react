import React from 'react'
import { db } from '@/app/firebase'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const PaymentsEdit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setNama] = React.useState("");
    const [nomorKartu, setNomorKartu] = React.useState("");

    React.useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, "payments", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNama(docSnap.data().name);
                setNomorKartu(docSnap.data().nomorKartu);
            } else {
                console.log("No such document!");
            }
        };
        if(id){
            fetchItem();
        }
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await updateDoc(doc(db, "payments", id), {
                name,
                nomorKartu,
            });
            MySwal.fire({
                icon: 'success',
                title: 'Data submitted successfully',
                text: `Your data has been submitted successfully`,
            });
            navigate("/payments");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            // console.error("Error adding document: ", e);
            // MySwal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            // });
        }
    };




  return (
    <div className="m-10">
        <div className="py-4">
        <Link to="/payments" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Kembali
        </Link>
        </div>
        <form>
            <div className="mb-6">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Nama
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setNama(e.target.value)}
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
        </div>
        <div className="mb-6">
            <label
                htmlFor="nomorKartu"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Nomor Kartu
            </label>
            <input
                type="text"
                name="nomorKartu"
                id="nomorKartu"
                placeholder="nomorKartu"
                value={nomorKartu}
                onChange={(e) => setNomorKartu(e.target.value)}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                        >
                            Edit
                        </button>
                        </div>
                        </form>


                </div>
  )
}

export default PaymentsEdit