import './contact-us.css'
const ContactUs = () => {
    const submit_func = (e) => {
        e.preventDefault();

    }
    return (
    <div className="contact-us-section">
        <form action="" onSubmit={(e) => submit_func(e)}>
        <input type="text" name="name"  placeholder="Ваше ім'я"/>
        <input type="text" name="name" placeholder="Ваш email"/>
        <textarea name="Text1" cols="40" rows="5" placeholder='Повідомлення' id="message"></textarea>
        <input type="submit" value="Надіслати" id="submit-button"/>
        </form>
        <div className="all-contacts">
        <div className="contacts">
            <div className="numbers">
                <div className="number-list">
                    <p className="contacts-header">Контактні номери телефону:</p>
                    <p className="number">+380 96 000 00 00<span className="operator">– мобільний Київстар</span></p>
                    <p className="number">+380 96 000 00 00<span className="operator">– мобільний Vodafone</span></p>
                    <p className="number">+380 96 000 00 00 <span className="operator">– безкоштовні дзвінки 
    зі стаціонарних телефонів</span></p>
                </div>
               
            </div>
        </div>
        <div className="contacts">
                <p className="contacts-header">Регіональні офіси:</p>
                <div className="streets">
                    <p className="street">Київ, вул. Свободи, 23</p>
                    <p className="street">Львів, вул. Свободи, 25</p>
                    <p className="street">Дніпро, вул. Перемоги, 26</p>
                </div>
            </div>
        </div>
        
    </div>
);
};

export default ContactUs;