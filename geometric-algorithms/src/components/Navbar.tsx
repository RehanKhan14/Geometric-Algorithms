import { Grid,Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/Navbar.module.scss";

export const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div className={styles.container}>
           <Grid container spacing={1}>
                
                <Grid xs={4} className={styles.first}>
                    <Link to='/' className={styles.logo}>
                        <img className={styles.logoimg} src="./images/logo.png" alt="icon"/>
                        <h2> Geo Algorithmics</h2>
                    </Link>
                </Grid>
                <Grid xs={8} className={styles.second}>
                    <div className={styles.menuitems}>
                            <Link to='/intersection' className={styles.items}>Intersection </Link>
                            <Link to='/convex-hull' className={styles.items}>Convex Hull </Link>
                    <Button variant="outlined" className={styles.contact} onClick={()=>{
                        navigate("/contact");
                    }}>Contact Us</Button>
                    </div>
                </Grid>
                {/* <Grid xs={2} className={styles.third}>
                </Grid> */}
            </Grid> 
                        
        </div>
    );
}