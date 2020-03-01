const config = require('./../config')
const store = require('./../store.js')

const showPotatoes = (data) => {
  return $.ajax({
    url: config.apiUrl + '/potatoes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const onShowOnePotato = (id) => {
  return $.ajax({
    url: config.apiUrl + '/potatoes/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createPotato = (data) => {
  return $.ajax({
    url: config.apiUrl + '/potatoes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const onUpdatePotato = (data) => {
  return $.ajax({
    url: config.apiUrl + '/potatoes/' + store.potatoId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const onDeletePotato = (id) => {
  return $.ajax({
    url: config.apiUrl + '/potatoes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showPotatoes,
  onShowOnePotato,
  createPotato,
  onUpdatePotato,
  onDeletePotato
}
