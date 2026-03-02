const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4728514488313!2d-58.4802879!3d-34.5542491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb715dc6f921f%3A0xe5a3c9a6af056ebd!2sC.%20Cris%C3%B3logo%20Larralde%203471%2C%20C1430FQM%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1709413284074!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0, display: 'block' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación de la iglesia"
    />
  )
}

export default GoogleMap