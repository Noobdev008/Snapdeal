import React from "react";
import styles from "./Footer.module.css";
import lock from '../../assets/images/lock.png'
import secure from "../../assets/images/secure.png"
import help from "../../assets/images/help.png"
import shop from "../../assets/images/shop.png"
import paymenticon from "../../assets/images/paymenticons.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import youtube from "../../assets/images/youtube.png"
import instagram from "../../assets/images/instagram.png"
import pintrest from "../../assets/images/pinterest.png"

import { FooterDescription } from "./FooterDescription";
export const Footer = () => {
  return (
    <div className={styles.MAinFooter}>
      <div className={styles.fourflex}>
        <div className={styles.insideflex}>
          <div className={styles.icons}>
            <img alt="" src={lock} height="50px" />
          </div>
          <p className={styles.insideflexfonthead}>100% SECURE PAYMENTS</p>
          <p className={styles.insideflexfontbody}>
            Moving your card details to a much more
            <br />
            secured place
          </p>
        </div>
        <div className={styles.insideflex}>
          <div className={styles.icons}>
            <img alt=""
              src={secure}
              height="50px"
            />
          </div>
          <p className={styles.insideflexfonthead}>TRUSTPAY</p>
          <p className={styles.insideflexfontbody}>
            100% Payment Protection. Easy <br />
            Return Policy
          </p>
        </div>
        <div className={styles.insideflex}>
          <div className={styles.icons}>
            <img alt="" src={help} height="50px" />
          </div>
          <p className={styles.insideflexfonthead}>HELP CENTER</p>
          <p className={styles.insideflexfontbody}>
            Got a question? Look no further. <br />
            Browse or submit your query here.
          </p>
        </div>
        <div className={styles.insideflex}>
          <div className={styles.icons}>
            <img alt="" src={shop} height="50px" />
          </div>
          <p className={styles.insideflexfonthead}>SHOP ON THE GO</p>
          <p className={styles.insideflexfontbody}>
            Download the app and get exciting <br />
            app only offers at your fingertips
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <p className={styles.footerfonthead}>POLICY INFO</p>
          <p className={styles.insideflexfontbody}>
            Privay Policy <br />
            Terms of Sale <br />
            Terms of USe <br />
            Report Abuse & Tkedown Policy
          </p>
        </div>
        <div>
          <p className={styles.footerfonthead}>COMPANY</p>
          <p className={styles.insideflexfontbody}>
            About Us <br />
            Core Values <br />
            Careers <br />
            Blog <br />
            Sitemap
          </p>
        </div>
        <div>
          <p className={styles.footerfonthead}>SNAPDEAL BUSINESS</p>
          <p className={styles.insideflexfontbody}>
            Shopping App <br />
            Sell on Snapdeal <br />
            Advertise on Snapdeal <br />
            Media Enquiries <br />
            Be an Affiliate
          </p>
        </div>
        <div>
          <p className={styles.footerfonthead}>NEED HELP ?</p>
          <p className={styles.insideflexfontbody}>
            FAQ <br />
            Contact Us <br />
            Online Shopping
          </p>
        </div>
        <div>
          <p className={styles.footerfonthead}>SUBSCRIBE</p>
          <div className={styles.subsbox}>
            <input type="text" className={styles.subtext} placeholder="Your email address" />
            <input type="button" className={styles.subbutton} value="SUBSCRIBE" />
          </div>
          <p className={styles.insideflexfontbody}>
            Register now to get updates on promotions and <br />
            coupons.Or Download App
          </p>
        </div>
      </div>

      <div className={styles.paymentconnect}>
        <div>
          <p className={styles.paymentconnectfonthead}>PAYMENT</p>
          <div>
            <img alt=""
              src={paymenticon}
              height="35px"
            />
          </div>
        </div>
        <div>
          <p>CONNECT</p>
          <div className={styles.connecticons}>
            <div>
              <img alt=""
                src={facebook}
                height="30px"
              />
            </div>
            <div>
              <img alt=""
                src={twitter}
                height="30px"
              />

              {/* <img alt="" src="/twitter.png" height="30px" /> */}
            </div>
            <div>
              {/* <img alt="" src="/youtube.png" height="30px" /> */}
              <img alt=""
                src={youtube}
                height="30px"
              />
            </div>
            <div>
              <img alt=""
                src={instagram}
                height="30px"
              />
            </div>
            <div>
              <img alt=""
                src={pintrest}
                height="30px"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterDescription />
      <div className={styles.lastfooter}>
        <div>
          <p className={styles.footerdesfont}>
            Copyright © 2020, Snapdeal Limited. All Rights Reserved
          </p>
        </div>
        <div>
          <p className={styles.footerdesfont}>
            Made with <span>❤️</span> in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer