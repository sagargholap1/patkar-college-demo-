import React from "react";

const Map = () => {
  return (
    <div className="border-2 shadow-md h-[40rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6346023327883!2d72.84397541538495!3d19.167465454070978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b653e4e7adfd%3A0x404b192523023338!2sPATKAR%20VARDE%20COLLEGE%2C%20Piramal%20Nagar%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra%20400104!5e0!3m2!1sen!2sin!4v1669609875578!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </div>
  );
};

export default Map;
