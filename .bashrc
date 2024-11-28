#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1=' \[\e[96;1;3;4m\]\W\[\e[0m\] \[\e[38;5;13m\]->\[\e[0;95m\] \e[38;5;201m\]'
