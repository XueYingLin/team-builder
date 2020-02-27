import React, { useState } from 'react';
import NewMember from './NewMember';
import Member from './Member';


function MemberList (props) {
    const [list, setList] = useState([
       
    ]);

    const addToMemberList = (person) => {
        const newList = [...list];
        newList.push(person);
        setList(newList);
    };

    
    return (
        <div>
            <h2>List of the Team Member</h2>
            <div>
                {list.map(p => {
                    return <Member member={p} />
                })}
            </div>
            <NewMember addPerson={addToMemberList} />
        </div>
    )
    
}


export default MemberList;