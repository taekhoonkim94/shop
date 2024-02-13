import { Nav } from 'react-bootstrap';

const TabContent = ({
    tab,
    setTab
}) => {

    const navList = [
        { id: 0, content: '내용0은 ~' },
        { id: 1, content: '내용1은 ~' },
        { id: 2, content: '내용2는 ~' }
    ];

    return (
        <>
            <Nav variant="tabs" defaultActiveKey="link0">
                {navList.map(nav => (
                    <Nav.Item key={nav.id}>
                        <Nav.Link
                            eventKey={`link${nav.id}`}
                            onClick={() => setTab(nav.id)}>
                            버튼{nav.id}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            {navList.map(nav => (
                tab === nav.id ? <div key={nav.id}>{nav.content}</div> : null
            ))}
        </>
    )
}

export default TabContent;