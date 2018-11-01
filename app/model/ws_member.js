'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BIGINT, DATEONLY } = app.Sequelize;

  const WsMember = app.model.define('ws_member', {
    memberid: { type: BIGINT(11), primaryKey: true, autoIncrement: true },
    member_name: STRING(50),
    sex: STRING(1),
    born: DATEONLY,
    photo_url: STRING(255),
    areaid: INTEGER(11),
    created: DATE,
    enabled: INTEGER(1),
    updated: DATE,
    memo: STRING(255),

  }, { timestamps: false, freezeTableName: true, tableName: 'ws_member' });

  return WsMember;
};
