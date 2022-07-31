import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin evlat?',
        'Lanet olsun! Bu çıkmaz yol.',
        'İnternetini kontrol ettin mi cocuk adam?'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

