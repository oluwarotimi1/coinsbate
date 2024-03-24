import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './sendbtc.module.css'
import btcImage from '../../../assets/btc_image.png'
import btcimg from '../../../assets/btc.png'
import {imageDb} from '../../../auth/firebase/firebase'
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const SendBtc = ({ setActiveTabBtc, inputData}) => {

  const [copied, setCopied] = useState(false);

  const [uploadedImage, setUploadedImage] = useState(false)

  const [img, setImg] = useState('');

  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleConfirmAmount =()=>{
    setActiveTabBtc("confirmamount");
  }
  const handleSentBtc =()=>{
    setActiveTabBtc("sendbtc")
  }
  const handleCopy = () => {
    navigator.clipboard.writeText("TNABkNR8cGGhKTrtq2Hv3dk3rLL9uotRV1")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  const handleUpload = async (e) => {
    try {
      e.preventDefault()
      const imgRef = ref(imageDb, `files/${uuidv4()}`);
      await uploadBytes(imgRef, img);
      const downloadUrl = await getDownloadURL(imgRef);
      setUploadedImage(true)
      setUploadedImageUrl(downloadUrl);
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };
  return (
    <div>
      <Container  className={styles.ammt_container}>
      <form className={styles.ammt_form}>

        <div className={styles.ammt_form_div}>
          <img src={btcImage} alt=""  width="50px" height="50px"/>

          <div>
            <p>You have requested <span style={{color:'red'}}> {inputData} USD</span>, Deposit <span style={{color:'red'}}> {inputData} USDT</span> for successful payment</p>
            <h6>Please follow the instruction bellow</h6>
          </div>
          <div>
            <p>Kindly make your $BTC Bitcoin deposit to the following wallet address</p>

            <span className={styles.sendbtc_address} onClick={handleCopy}> 18VoK1RJ4WCBEdbgspr2bxJEgZzQdF9Y4V</span>
            <br/ >
            <span>Tap to copy</span>
            <span onClick={handleCopy}> {copied && <span style={{ marginLeft: "5px" }}>Copied!</span>}</span>
          </div>
          <img src={btcimg} alt=""  width="100px" height="100px"/>
        </div>
        <div>
          <input type='file' onChange={(e)=>setImg(e.target.files[0])} />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div>
          {uploadedImage && <img src={uploadedImageUrl} alt='' style={{marginBottom:'1rem'}} width="100px" height="100px" />
       }
         </div>
        
        </form>

        <span className={styles.ammt_btns}>

        

        <button className={styles.ammt_btn} onClick={handleConfirmAmount}>Back</button>
        <button className={styles.ammt_btn} onClick={handleSentBtc}>Next</button>

        </span>
      </Container>
    </div>
  )
}

export default SendBtc
