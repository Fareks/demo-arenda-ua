
const ContactUs = () => {
    const submit_func = (e) => {
        e.preventDefault();

    }
    return (
    <div className="contact-us-section">
        <form action="" onSubmit={(e) => submit_func(e)}>
        <input type="text" name="name"  placeholder="Ваше ім'я"/>
        <input type="text" name="name" placeholder="Ваш email"/>
        <input type="text" name="name" placeholder="Повідомлення"/>
        <input type="submit" value="Надіслати" />
        </form>
    </div>
);
};

export default ContactUs;