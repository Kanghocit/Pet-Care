import React from "react";
import { FOOTER_DATA } from "@/app/constants/footer";
import { Col } from "antd";
import { Row } from "antd";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-6">
      <Row>
        <Col span={6}>
          {" "}
          <div>
            <h3 className="text-xl font-bold">
              {FOOTER_DATA.companyInfo.name}
            </h3>
            <p>{FOOTER_DATA.companyInfo.description}</p>
            <p>Địa chỉ: {FOOTER_DATA.companyInfo.address}</p>
            <p>Mã số thuế: {FOOTER_DATA.companyInfo.taxCode}</p>
            <p>Hotline: {FOOTER_DATA.companyInfo.hotline}</p>
            <p>Email: {FOOTER_DATA.companyInfo.email}</p>
          </div>
        </Col>
        <Col span={6}>
          <div>
            <h4 className="text-lg font-semibold">Hỗ trợ khách hàng</h4>
            <ul>
              {FOOTER_DATA.support.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-blue-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={6}>
          <div>
            <h4 className="text-lg font-semibold">Chính sách</h4>
            <ul>
              {FOOTER_DATA.policies.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="hover:text-blue-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={6}>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold">
              {FOOTER_DATA.newsletter.title}
            </h4>
            <p>{FOOTER_DATA.newsletter.description}</p>
            <input
              type="email"
              placeholder={FOOTER_DATA.newsletter.placeholder}
              className="border p-2 mt-2"
            />
            <button className="bg-orange-500 text-white px-4 py-2 mt-2">
              {FOOTER_DATA.newsletter.buttonText}
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Mạng xã hội</h4>
            <div className="flex space-x-4">
              {FOOTER_DATA.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </Col>
        <Col span={6}></Col>
        <Col span={6}>
          <h4 className="text-lg font-semibold mt-4">Tổng đài hỗ trợ</h4>
          <ul>
            {FOOTER_DATA.customerService.map((service, index) => (
              <li key={index}>
                <a href={service.path} className="hover:text-blue-500">
                  {service.label}: {service.phone}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col span={6}>
          {" "}
          {/* Payment Methods */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Phương thức thanh toán</h4>
            <div className="flex space-x-4">
              {FOOTER_DATA.paymentMethods.map((method, index) => (
                <img
                  key={index}
                  src={`/images/payment-methods/${method}.png`}
                  alt={method}
                  className="w-10 h-10"
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
