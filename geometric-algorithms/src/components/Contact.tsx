import { Grid } from "@mui/material";
import style from "./css/Contact.module.scss"
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Contact = () =>{
    // const navigate=useNavigate();
    useEffect(()=>{
        document.title="Geo Algorithmics | Contact";
    },[])
    return (
        <div className={style.container}>
            <h1>Developer Details</h1>
            <Grid container className={style.cards}>
                <Grid xs={3} className={style.card}>
                    <img src="./images/shayan.jpg" alt="person"/>
                    <p>
                        <b>Name: </b>Syed Muhammad Shayan Hussain<br/> 
                        <b>Email: </b>s.m.shayanhussain@gmail.com<br/> 
                        <b>LinkedIn: </b><a href="https://www.linkedin.com/in/syed-muhammad-shayan-hussain-a71282229/">S.M Shayan Hussain</a><br/>
                        <b>University: </b>FAST NUCES, Karachi<br/>
                    </p>
                </Grid>
                <Grid xs={3} className={style.card}>
                    <img src="./images/rehan.jpg" alt="person"/>
                    <p>
                        <b>Name: </b>Muhammad Rehan Khan<br/> 
                        <b>Email: </b>muhammadrehankhan000@gmail.com<br/> 
                        <b>LinkedIn: </b><a href="https://www.linkedin.com/in/rehan-khan-b540b51b7/">Muhammad Rehan Khan</a><br/>
                        <b>University: </b>FAST NUCES, Karachi<br/>
                    </p>
                </Grid>
                <Grid xs={3} className={style.card}>
                    <img src="./images/azaan.jpeg" alt="person"/>
                    <p>
                        <b>Name: </b>Azan Nabi Khan<br/> 
                        <b>Email: </b>azaanukhan@gmail.com<br/> 
                        <b>LinkedIn: </b><a href="https://www.linkedin.com/in/azaan-nabi-khan-552ba9228/">Azaan Nabi Khan</a><br/>
                        <b>University: </b>FAST NUCES, Karachi<br/>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}