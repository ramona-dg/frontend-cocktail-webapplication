import React from 'react';
import styles from './Home.module.css'



// Hier op de home pagina komt een welkom tekst met twee links naar Login en Register

function Home() {
    return (
    <>
        <div className={styles['content-container']}>
            <div className={styles.content}>
           <h1>Welcome at Cocktails</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque debitis, delectus doloribus eaque expedita fuga harum iusto labore maxime modi nisi nostrum numquam provident quo quos suscipit tempore voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur delectus, dolorem ducimus eligendi, fugit illo iste molestias nemo, perferendis perspiciatis praesentium quasi quo reprehenderit suscipit! Ab accusamus adipisci architecto atque dicta dolorum est et explicabo iste minus nostrum nulla porro, praesentium quia quis quod soluta sunt ullam, velit voluptatem. A ab dolore impedit libero optio quos rem. A animi architecto, assumenda consectetur cum dignissimos error facilis harum laboriosam nemo nisi omnis similique temporibus unde velit? Ab error laborum, odio quasi sint tempore. A alias, aliquid delectus distinctio dolorem enim, est fuga illum, labore magni nemo nulla saepe tenetur unde!</p>
        </div>
            </div>
    </>
    );
}

export default Home;