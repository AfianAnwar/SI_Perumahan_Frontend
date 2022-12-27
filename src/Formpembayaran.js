import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formpembayaran() {
    const [name, setName] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function HandleSubmit(e) {
        console.log(image)
        e.preventDefault();
        axios.post('http://localhost:3069/transaksi', {
            name: name,
            tanggal: tanggal,
            keterangan: keterangan,
            image: image,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                navigate('/pembayaran');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div class="container">
            <div class="card" style={{marginTop: "150px", marginBottom: "50px"}}>
                <div class="card-header">
                    Form Pembayaran Iuran Bulanan
                </div>
                <div class="card-body">
                    <form onSubmit={(e) => HandleSubmit(e)}>
                        <div class="form-group">
                            <label for="">Nama</label>
                            <input type="text" name="title" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="">Tanggal Bayar</label>
                            <input type="date" name="tanggal" class="form-control" value={tanggal} onChange={e => setTanggal(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="">Keterangan</label>
                            <input type="text" name="keterangan" class="form-control" value={keterangan} onChange={e => setKeterangan(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="">Upload Bukti Pembayaran</label>
                            <input type="text" name="image" class="form-control" value={image} onChange={e => setImage(e.target.value)}/>
                        </div>
                        <button type="submit" class="btn btn-warning">Bayar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formpembayaran;