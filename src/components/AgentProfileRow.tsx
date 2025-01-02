import React from 'react';

const AgentProfileRow: React.FC = () => {
  return (
    <section className="profiles">
      {/* Agent 1 */}
      <div className="avatar" style={{ backgroundImage: 'url(https://picsum.photos/id/112/300/200)' }}>
        <div className="avatar-img">
          <img src="https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/profile-1-trans.png" alt="Agent1" />
        </div>
        <p>Agent1</p>
      </div>

      {/* Agent 2 */}
      <div className="avatar" style={{ backgroundImage: 'url(https://picsum.photos/id/54/300/200)' }}>
        <div className="avatar-img">
          <img src="https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/profile-8-trans.png" alt="Agent2" />
        </div>
        <p>Agent2</p>
      </div>

      {/* Agent 3 */}
      <div className="avatar" style={{ backgroundImage: 'url(https://picsum.photos/id/48/300/200)' }}>
        <div className="avatar-img">
          <img src="https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/profile-3-trans.png" alt="Agent3" />
        </div>
        <p>Agent3</p>
      </div>

      {/* Agent 4 */}
      <div className="avatar" style={{ backgroundImage: 'url(https://picsum.photos/id/210/300/200)' }}>
        <div className="avatar-img">
          <img src="https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/profile-5-trans.png" alt="Agent4" />
        </div>
        <p>Agent4</p>
      </div>

      {/* Agent 5 */}
      <div className="avatar" style={{ backgroundImage: 'url(https://picsum.photos/id/78/300/200)' }}>
        <div className="avatar-img">
          <img src="https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/images/profile-4-trans.png" alt="Agent5" />
        </div>
        <p>Agent5</p>
      </div>
    </section>
  );
};

export default AgentProfileRow;
