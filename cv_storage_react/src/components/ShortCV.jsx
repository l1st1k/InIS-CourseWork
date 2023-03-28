import React from 'react';
// const cv = {
//     "cv_id": "01a32924-a64c-41a0-acc3-c36e17b592e1",
//     "first_name": "Ehor",
//     "last_name": "Zavadskiy",
//     "age": 5,
//     "major": "cartoon developer",
//     "years_of_exp": 3
// };

const ShortCV = ({cv, number}) => {
    return (
        <div className={'cv-item'} key={cv.cv_id}>
                <div className="cv__content">
                    <strong>{number}. {cv.first_name} {cv.last_name}, {cv.age}</strong>
                    <div>{cv.major}</div>
                    <div>{cv.years_of_exp} years of experience</div>

                </div>
                <div className="post__btns">
                    <button onClick={() => {alert(`Deleted ${cv.cv_id}`);}}>Delete</button>
                    {/*<MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>*/}
                    {/*    Открыть*/}
                    {/*</MyButton>*/}
                    {/*<MyButton onClick={() => props.remove(props.post)}>*/}
                    {/*    Удалить*/}
                    {/*</MyButton>*/}
                </div>
        </div>
    );
};

export default ShortCV;