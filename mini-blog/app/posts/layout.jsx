export default function Layout({children}) {
    return (
        <div>
            <marquee style={{ background: '#AEADA9', color: '#0A1548' }}> Mini-Blog :) </marquee>
            {children}
        </div>
    )
}