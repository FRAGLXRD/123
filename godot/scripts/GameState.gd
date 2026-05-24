extends Node
class_name GameState

const MAX_PLAYERS := 6
const MIN_PLAYERS := 2

var player_count: int = 6
var with_bots: bool = true
var invite_only: bool = true
var friends_only: bool = false
var current_language: String = "uk"

func can_start_match() -> bool:
	if player_count < MIN_PLAYERS or player_count > MAX_PLAYERS:
		return false
	if friends_only and with_bots:
		return false
	return true

func build_lobby_players() -> Array[Dictionary]:
	var players: Array[Dictionary] = []
	for i in range(player_count):
		var is_human := i == 0 or (not with_bots)
		players.append({
			"seat": i + 1,
			"name": _resolve_name(i, is_human),
			"is_bot": not is_human,
			"cards": 6,
			"state": _resolve_state(i)
		})
	return players

func _resolve_name(index: int, is_human: bool) -> String:
	if index == 0:
		return "You"
	if is_human:
		return "Friend %d" % index
	return "Bot %d" % index

func _resolve_state(index: int) -> String:
	if index == 0:
		return "attack"
	if index == 1:
		return "defend"
	return "waiting"
