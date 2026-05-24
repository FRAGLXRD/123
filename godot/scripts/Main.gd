extends Control

@onready var title_label: Label = %TitleLabel
@onready var subtitle_label: Label = %SubtitleLabel
@onready var players_label: Label = %PlayersLabel
@onready var players_slider: HSlider = %PlayersSlider
@onready var bots_check: CheckBox = %BotsCheck
@onready var invite_check: CheckBox = %InviteCheck
@onready var friends_only_check: CheckBox = %FriendsOnlyCheck
@onready var lobby_button: Button = %CreateLobbyButton
@onready var start_button: Button = %StartButton
@onready var output_text: RichTextLabel = %OutputText

func _ready() -> void:
	players_slider.value = GameState.player_count
	bots_check.button_pressed = GameState.with_bots
	invite_check.button_pressed = GameState.invite_only
	friends_only_check.button_pressed = GameState.friends_only
	_refresh_texts()
	_refresh_output()

func _on_uk_button_pressed() -> void:
	GameState.current_language = "uk"
	_refresh_texts()

func _on_en_button_pressed() -> void:
	GameState.current_language = "en"
	_refresh_texts()

func _on_players_slider_value_changed(value: float) -> void:
	GameState.player_count = int(value)
	_refresh_texts()
	_refresh_output()

func _on_bots_check_toggled(toggled_on: bool) -> void:
	GameState.with_bots = toggled_on
	if not toggled_on:
		GameState.friends_only = true
		friends_only_check.button_pressed = true
	_refresh_output()

func _on_invite_check_toggled(toggled_on: bool) -> void:
	GameState.invite_only = toggled_on
	_refresh_output()

func _on_friends_only_check_toggled(toggled_on: bool) -> void:
	GameState.friends_only = toggled_on
	if toggled_on:
		GameState.with_bots = false
		bots_check.button_pressed = false
	_refresh_output()

func _on_create_lobby_button_pressed() -> void:
	_refresh_output()

func _on_start_button_pressed() -> void:
	if GameState.can_start_match():
		output_text.text += "\n[OK] Match started (prototype flow)."
	else:
		output_text.text += "\n[ERROR] Invalid lobby config."

func _refresh_texts() -> void:
	title_label.text = Localization.tr_key("title")
	subtitle_label.text = Localization.tr_key("subtitle")
	players_label.text = "%s: %d" % [Localization.tr_key("players"), GameState.player_count]
	bots_check.text = Localization.tr_key("bots")
	invite_check.text = Localization.tr_key("invite")
	friends_only_check.text = Localization.tr_key("friends_only")
	lobby_button.text = Localization.tr_key("create_lobby")
	start_button.text = Localization.tr_key("start_game")

func _refresh_output() -> void:
	var lines: Array[String] = []
	for p in GameState.build_lobby_players():
		lines.append("Seat %d | %s | %s | cards: %d | %s" % [
			p.seat,
			p.name,
			("BOT" if p.is_bot else "HUMAN"),
			p.cards,
			p.state
		])
	output_text.text = "\n".join(lines)
