import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import action from '../../store/actions';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '300px',
    height: '50px',
    backgroundColor: 'rgba(117, 144, 201, 1)',
    borderColor: 'rgba(117, 144, 201, 1)',
    borderRadius: '50px',
  },
};

function Home({ logout }) {
  const handleLogout = (e) => {
    logout();
  };
  return (
    <div style={styles.container}>
      <Result
        icon={<Icon type="unlock" theme="twoTone" twoToneColor="#7590C9" />}
        title="You Have Successfully Login!"
        extra={(
          <Button style={styles.button} type="primary" key="console" onClick={handleLogout}>
            Logout
          </Button>
        )}
      />
    </div>
  );
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  user: store.user,
});
export default withRouter(connect(mapStateToProps, action)(Home));
