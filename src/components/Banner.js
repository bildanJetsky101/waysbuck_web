import BannerImg from '../assets/bannerImg.png'
import React from 'react'

export default function Banner() {
    return (
        <div style={styles.bannerParent}>
            <img style={styles.bannerImg} src={BannerImg} alt="" />
            <div style={styles.bgBanner}>
                <div style={styles.bannerText}>
                    <h1 style={{fontSize:'50px'}}>WAYSBUCK</h1>
                    <p style={{fontSize:'24px'}}>Things are changing but, we're stil here for you</p>
                    <p style={{fontSize:'22px'}}>We have temporarely closed our in-store cafe, but select grocery and drive-thru location remaining open.<b>Waysbuck</b> Drivers also available</p>
                    <p style={{fontSize:'22px'}}>Let's order...</p>
                </div>
            </div>
        </div>
    )
}

const styles =  {
    bgBanner: {
        backgroundColor:'rgba(189, 7, 7, 1)',
        width:'90%',
        height:'28rem',
        borderRadius:'10px'
    },
    bannerParent: {
        //backgroundColor:'blue',
        height:'30rem',
        width:'80%',
        margin:'auto',
        paddingTop:'4rem',
        display:'flex',
        justifyContent:'space-between'
    },
    bannerText: {
        padding:'3rem',
        width:'55%',
        color:'white'
    },
    bannerImg : {
        position:'absolute',
        marginLeft:'38rem',
        marginTop:'3rem'

    }
}