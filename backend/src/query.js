const knex = require('./knex')
const bcrypt = require('bcrypt')
const validator = require('validator')

function firstOrCreateUserByProvider({
  member_provider,
  member_provider_number,
  member_provider_name,
  member_avatar_url,
  token = null
}) {
  return knex('member')
    .where({
      member_provider,
      member_provider_number
    })
    .first()
    .then(member => {
      if (member) {
        return member
      } else {
        return knex('member')
          .insert({
            member_provider,
            member_provider_number,
            member_provider_name,
            member_avatar_url,
            token
          })
          .then(([member_id]) => {
            return knex('member')
              .where({ member_id })
              .first()
          })
      }
    })
}

function getUserById(member_id) {
  return knex('member')
    .where({ member_id })
    .first()
}

function postDayLogRegret({ day_log_member_id, day_log_regret, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
    .then(day_log => {
      if (!day_log) {
        knex('day_log')
          .insert({
            day_log_member_id,
            day_log_diary_date
          })
          .then()
      }
      return knex('day_log')
        .where({ day_log_diary_date, day_log_member_id })
        .update({ day_log_regret })
    })
}

function postDayLogComment({ day_log_member_id, day_log_comment, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
    .then(day_log => {
      if (!day_log) {
        knex('day_log')
          .insert({
            day_log_member_id,
            day_log_diary_date
          })
          .then()
      }
      return knex('day_log')
        .where({ day_log_diary_date, day_log_member_id })
        .update({ day_log_comment })
    })
}

function getSelectDayLog({ day_log_member_id, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
}

function postDayKgbyUser({ day_log_member_id, day_log_kg, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
    .then(day_kg => {
      if (!day_kg) {
        knex('day_log')
          .insert({
            day_log_member_id,
            day_log_diary_date
          })
          .then()
      }
      return knex('day_log')
        .where({ day_log_diary_date, day_log_member_id })
        .update({ day_log_kg })
    })
}

module.exports = {
  getUserById,
  firstOrCreateUserByProvider,
  postDayLogRegret,
  postDayLogComment,
  getSelectDayLog,
  postDayKgbyUser
}
