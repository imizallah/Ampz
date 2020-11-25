import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title" >Ampz Search:</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search users by their Name"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default HeaderPage;
