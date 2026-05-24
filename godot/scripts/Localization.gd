extends Node
class_name Localization

var dictionary := {
	"uk": {
		"title": "Durak Arena",
		"subtitle": "Комп'ютерна 2D гра для Steam: до 6 гравців, друзі, інвайти, боти.",
		"create_lobby": "Створити лобі",
		"start_game": "Почати гру",
		"players": "Гравців",
		"bots": "Боти",
		"invite": "Інвайти друзів",
		"friends_only": "Лише друзі",
		"table": "Стіл",
		"deck": "Колода"
	},
	"en": {
		"title": "Durak Arena",
		"subtitle": "Desktop 2D game for Steam: up to 6 players, friends, invites, and bots.",
		"create_lobby": "Create Lobby",
		"start_game": "Start Game",
		"players": "Players",
		"bots": "Bots",
		"invite": "Friend Invites",
		"friends_only": "Friends Only",
		"table": "Table",
		"deck": "Deck"
	}
}

func tr_key(key: String) -> String:
	var lang := GameState.current_language
	if not dictionary.has(lang):
		lang = "en"
	return dictionary[lang].get(key, key)
