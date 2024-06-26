import React from "react";
import { Icon } from "@iconify/react";
import heart from "../../assets/svg/heart.svg";
import car from "../../assets/svg/car.svg";
import tel from "../../assets/svg/tel.svg";
import address from "../../assets/svg/address.svg";
import mail from "../../assets/svg/mail.svg";
import openTime from "../../assets/svg/open-time.svg";
import arrows from "../../assets/svg/arrows.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="container__item container__item--item1">
                    <a href="!#" className="logo">
                        <svg
                            width="148"
                            height="43"
                            viewBox="0 0 148 43"
                            xmlns="http://www.w3.org/2000/svg"
                            className="logo"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M61.233 11.354v7.296c0 .228.101.341.304.341h1.824c1.773 0 3.128-.367 4.065-1.101.938-.76 1.406-1.812 1.406-3.154 0-2.634-1.735-3.952-5.205-3.952-.785 0-1.47.051-2.052.152-.228.051-.342.19-.342.418ZM57.053 34c-.582 0-1.089-.215-1.52-.646-.43-.43-.645-.937-.645-1.52V8.62c0-.634.202-1.178.608-1.634.43-.456.95-.71 1.557-.76a69.11 69.11 0 0 1 6.954-.342c3.8 0 6.624.722 8.473 2.166 1.874 1.418 2.812 3.445 2.812 6.079 0 1.697-.494 3.23-1.482 4.598-.988 1.342-2.28 2.305-3.876 2.887-.025 0-.038.013-.038.038 0 .05.025.076.076.076 1.241.71 2.293 2.204 3.154 4.484l2.166 5.775c.177.482.114.937-.19 1.368-.304.43-.71.646-1.216.646h-2.318a3 3 0 0 1-1.786-.57c-.532-.38-.9-.874-1.102-1.482l-1.9-5.471c-.354-1.064-.785-1.786-1.291-2.166-.507-.38-1.292-.57-2.356-.57h-1.596c-.203 0-.304.114-.304.342v7.751c0 .583-.215 1.09-.646 1.52-.43.43-.937.646-1.52.646h-2.014V34Zm24.217 0c-.583 0-1.09-.215-1.52-.646-.43-.43-.646-.937-.646-1.52V16.408c0-.583.216-1.09.646-1.52.43-.43.937-.646 1.52-.646h2.128c.582 0 1.09.215 1.52.646.43.43.646.937.646 1.52v15.426c0 .583-.216 1.09-.646 1.52-.43.43-.938.646-1.52.646H81.27Zm0-23.558c-.583 0-1.09-.215-1.52-.646-.43-.43-.646-.937-.646-1.52V7.67c0-.583.216-1.09.646-1.52.43-.43.937-.646 1.52-.646h2.128c.582 0 1.09.215 1.52.646.43.43.646.937.646 1.52v.608c0 .582-.216 1.089-.646 1.52-.43.43-.938.645-1.52.645H81.27v-.001ZM99.188 34.38c-3.268 0-5.776-.861-7.524-2.584-1.748-1.722-2.621-4.28-2.621-7.675 0-3.318.835-5.851 2.507-7.6 1.698-1.772 4.117-2.659 7.258-2.659 1.038 0 2.419.114 4.141.342.633.101 1.14.393 1.52.874.405.456.608 1 .608 1.634v.38c0 .532-.215.962-.646 1.292a1.745 1.745 0 0 1-1.444.342 19.159 19.159 0 0 0-3.23-.266c-1.443 0-2.52.456-3.23 1.367-.683.887-1.025 2.318-1.025 4.294 0 2.027.367 3.483 1.102 4.37.76.86 1.938 1.291 3.533 1.291 1.191 0 2.255-.1 3.192-.303.532-.127 1.001-.026 1.406.303.431.33.646.76.646 1.292v.38a2.67 2.67 0 0 1-.608 1.71 2.46 2.46 0 0 1-1.52.874 25.155 25.155 0 0 1-4.065.342Zm11.293-.38c-.583 0-1.089-.215-1.52-.646a2.148 2.148 0 0 1-.608-1.52V7.67c0-.583.203-1.09.608-1.52.431-.43.937-.646 1.52-.646h1.862a1.96 1.96 0 0 1 1.482.646c.43.43.646.937.646 1.52v14.02c0 .026.012.038.038.038l.076-.038 4.749-5.775c.912-1.115 2.077-1.672 3.496-1.672h2.735c.406 0 .697.19.874.57.203.38.165.735-.114 1.064l-6.497 7.637c-.127.152-.127.317 0 .494l6.573 8.321c.254.355.279.722.076 1.102-.177.38-.481.57-.912.57h-2.735c-1.419 0-2.571-.57-3.458-1.71l-4.787-6.231c-.026-.026-.051-.038-.076-.038-.026 0-.038.012-.038.038v5.775c0 .583-.216 1.09-.646 1.52-.406.43-.9.646-1.482.646h-1.862V34Zm23.79-.304-6.421-17.44c-.203-.482-.152-.937.152-1.368.304-.43.722-.646 1.254-.646h2.394c.608 0 1.165.203 1.671.608.507.38.836.874.988 1.482l2.888 11.817c0 .025.013.038.038.038s.038-.013.038-.038l3.458-11.855c.143-.595.494-1.12.988-1.482a2.997 2.997 0 0 1 1.785-.57h2.09c.507 0 .912.215 1.216.646.304.43.367.886.19 1.368l-8.967 24.09a2.926 2.926 0 0 1-1.14 1.443c-.532.38-1.115.57-1.748.57h-2.09c-.532 0-.937-.215-1.215-.646-.279-.405-.317-.848-.114-1.33l2.545-6.079c.051-.2.051-.409 0-.608ZM40.886 8.64c.146-3.13-2.786-5.75-6.067-4.67-1.524.5-3.603 1.37-5.67 2.846a23.472 23.472 0 0 0-8.154-1.437c-2.866 0-5.607.5-8.096 1.416-2.057-1.463-4.123-2.327-5.639-2.826C3.977 2.891 1.046 5.511 1.193 8.64c.086 1.838.339 4.65 1.11 7.35a14.55 14.55 0 0 0-1.422 6.259c0 9.874 9.625 16.869 20.114 16.869 10.488 0 20.113-6.994 20.113-16.87 0-2.177-.49-4.25-1.367-6.14.799-2.739 1.057-5.606 1.145-7.468Z"
                                    fill="#FFF"
                                    fill-rule="nonzero"
                                />
                                <path
                                    d="M31.485 12.304c.808-.749 1.72-1.169 2.383-1.396.465-.159.89.22.844.708-.091.987-.254 2.448-.448 2.875-.18.395-.235.32-.486-.016a6.154 6.154 0 0 0-.88-.98 8.181 8.181 0 0 0-1.191-.9c-.242-.153-.318-.202-.222-.291ZM8.07 10.908c.662.227 1.575.647 2.383 1.396.096.089.02.138-.221.29a8.16 8.16 0 0 0-1.192.9c-.45.404-.71.753-.88.981-.25.336-.307.411-.486.016-.193-.427-.356-1.888-.448-2.875-.046-.488.38-.867.845-.708H8.07Zm4.957 7.399c.059-.115.261-.354.599-.57.327-.21.681-.333.989-.333.738 0 1.47.443 1.56 1.299a.778.778 0 1 0 1.547-.163c-.2-1.888-1.845-2.686-3.107-2.686-.693 0-1.338.263-1.831.58-.483.31-.921.734-1.144 1.173a.774.774 0 0 0 .342 1.042.78.78 0 0 0 1.046-.342h-.001Zm2.1 7.94c-.616-.417-1.043-.912-1.203-1.244a.779.779 0 0 0-1.436.078.774.774 0 0 0 .033.593c.314.651.967 1.337 1.733 1.855.774.524 1.767.946 2.813.946.053 0 .105 0 .159-.003.08 1.439 1.739 2.992 3.774 2.992 2.036 0 3.695-1.553 3.775-2.992l.158.003c1.046 0 2.04-.422 2.814-.946.766-.518 1.418-1.204 1.732-1.855a.774.774 0 0 0-.364-1.035.779.779 0 0 0-1.038.364c-.16.332-.588.827-1.204 1.244-.609.412-1.3.678-1.94.678-1.38 0-2.948-.886-3.156-2.817 1.342-.171 2.334-.778 2.334-1.5 0-.857-1.393-1.55-3.11-1.55-1.719 0-3.112.693-3.112 1.55 0 .722.992 1.329 2.334 1.5-.207 1.93-1.775 2.817-3.155 2.817-.64 0-1.332-.267-1.94-.678h-.001Zm13.418-8.51c.337.216.54.455.598.57a.78.78 0 0 0 1.433-.108.774.774 0 0 0-.045-.592c-.223-.439-.661-.864-1.144-1.173-.494-.317-1.139-.58-1.831-.58-1.262 0-2.908.798-3.107 2.686a.778.778 0 0 0 1.547.162c.09-.855.822-1.298 1.56-1.298.307 0 .662.123.99.333h-.001Z"
                                    fill="#0052B1"
                                    fill-rule="nonzero"
                                />
                                <path
                                    d="M38.669 8.592c.079-1.687-1.46-3.003-3.153-2.448-1.62.531-3.897 1.514-6.02 3.264C26.965 8.292 24.07 7.661 21 7.661c-3.046 0-5.92.621-8.438 1.722-2.114-1.735-4.376-2.71-5.989-3.24-1.693-.554-3.232.762-3.153 2.449.093 1.977.385 4.983 1.282 7.646-1.02 1.835-1.59 3.88-1.59 6.037 0 8.215 8.168 14.614 17.888 14.614 9.72 0 17.89-6.4 17.89-14.614 0-2.118-.552-4.128-1.537-5.938.924-2.687 1.222-5.744 1.316-7.745Zm-2.667-.976c.575-.189 1.145.214 1.113.904-.096 2.038-.407 5.081-1.343 7.622l-.125.34.182.315c.969 1.67 1.505 3.526 1.505 5.478 0 7.072-7.154 13.064-16.334 13.064S4.667 29.347 4.667 22.275c0-1.986.555-3.872 1.556-5.566l.185-.313-.124-.343c-.91-2.523-1.216-5.52-1.31-7.533-.032-.69.538-1.093 1.113-.904 1.587.52 3.821 1.499 5.834 3.259l.383.334.461-.216C15.18 9.863 17.991 9.211 21 9.211c3.032 0 5.865.661 8.29 1.808l.464.22.384-.339c2.021-1.775 4.27-2.761 5.864-3.284Z"
                                    fill="#0052B1"
                                />
                            </g>
                        </svg>
                    </a>
                    <p>© 2022 Ricky Theme. All rights reserved.</p>
                    <div>
                        <a href="!#" className="policy ">
                            Privacy Policy
                        </a>
                        <a href="!#" className="terms">
                            Terms
                        </a>
                        <a href="!#" className="sitemap">
                            Sitemap
                        </a>
                    </div>
                </div>
                <div className="container__item container__item--item2">
                    <div className="item2__content">
                        <div className="image">
                            <img src={heart} alt="" />
                        </div>
                        <span>
                            Quis quisque viverra nulla risus integer aliquet in.
                            Dis nascetur vitae sed ultricies vel luctus massa.
                            Sed orci ut magnis maecenas pharetra.
                        </span>
                    </div>
                    <div className="item2__content">
                        <div className="image">
                            <img src={car} alt=""/>
                        </div>
                        <span>
                            Ut et duis ornare in eget elit. Vestibulum nisi nec
                            ultricies consectetur suspendisse. Vitae aliquam
                            quis sed at et.
                        </span>
                    </div>
                </div>
                <div class="container__item container__item--item3">
                    <ul>
                        <li>
                            <img src={arrows} alt="" />
                            <a href="!#">About Us</a>
                        </li>
                        <li>
                            <img src={arrows} alt="" />
                            <a href="!#">Our Team</a>
                        </li>
                        <li>
                            <img src={arrows} alt="" />
                            <a href="!#">Maintenance Mode</a>
                        </li>
                    </ul>
                    <div class="social">
                        <div>Follow Us:</div>
                        <a href="!#">
                            <Icon icon="cib:facebook-f" className="icon" />
                        </a>
                        <a href="!#">
                            <Icon
                                icon="icon-park-solid:instagram"
                                className="icon"
                            />
                        </a>
                        <a href="!#">
                            <Icon icon="mdi:twitter" className="icon" />
                        </a>
                        <a href="!#">
                            <Icon icon="uil:youtube" className="icon" />
                        </a>
                    </div>
                </div>
                <div className="container__item container__item--item4">
                    <ul>
                        <li>
                            <img src={tel} alt="" />
                            <span>+123 488 9652</span>
                        </li>
                        <li>
                            <img src={address} alt="" />
                            <span>25 West 21th Street, Miami FL, USA</span>
                        </li>
                        <li>
                            <img src={mail} alt="" />
                            <a href="!#">info@rickyshop.com</a>
                        </li>
                        <li>
                            <img src={openTime} alt="" />
                            <span>Mon-Fri: 10:00 - 18:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
