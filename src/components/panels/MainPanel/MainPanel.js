import './MainPanel.css';

function MainPanel() {
    return (
        <div className="AppPanel MainPanel">
            <img className="ProfileImage" alt="" src="https://www.w3schools.com/w3images/avatar_hat.jpg" />
            <span className="ProfileName">Sandro Schaurer, 24</span>
            <ul>
                <li><i class="bi bi-briefcase"></i> Job</li>
                <li><i class="bi bi-house"></i> Location</li>
                <li><i class="bi bi-envelope"></i> Email</li>
                <li><i class="bi bi-phone"></i> Phone</li>
            </ul>
            <hr />
            <h3><i class="bi bi-award"></i> Skills</h3>
            <h3><i class="bi bi-globe"></i> Languages</h3>
        </div>
    );
}

export default MainPanel;