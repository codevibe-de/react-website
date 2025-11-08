---
id: "T100"
rank: 80
title: "Git Crash Course"
summary: "Zweistündiger Power-Kurs zu den Grundlagen und Potentialen von Git"
duration: 2
durationUnit: "Hours"
featured: true
type: "Rave"
backgroundImageUrl: "/bg-tools2.png"
---

## Description

Dieses kompakte Git-Rave vermittelt in nur zwei Stunden ein echtes Verständnis dafür, wie Git „denkt“.

Statt Befehle auswendig zu lernen, verstehen die Teilnehmenden die internen Mechanismen: wie Commits, Branches und
Merges wirklich funktionieren, was im Staging-Bereich passiert und wie Git seinen Objektgraphen aufbaut.

Wir erklären die vier architektonischen Schichten von Git anhand zahlreicher Beispiele und Demonstrationen und bauen
somit nachhaltiges Wissen auf.

Darüber hinaus werden fortgeschrittene Funktionen vorgestellt, die im Alltag selten genutzt, aber extrem mächtig sind –
von Rebase und Cherry-Pick bis hin zu Worktrees und reflog.

## Goal

Teilnehmende verstehen die internen Konzepte von Git und können Änderungen, Branches und Historien sicher und bewusst
steuern.  
Sie lernen, wie sie Git effizienter, sicherer und kreativer einsetzen, um Entwicklungsprozesse zu beschleunigen und
Fehler schnell zu korrigieren.

## Target Audience

Softwareentwickler:innen, die Git bereits nutzen, aber es endlich **wirklich verstehen** möchten.  
Ideal für alle, die ihre täglichen Git-Workflows stabilisieren und erweitern wollen.

## Outline

- **Git im Überblick**
    - Git als Key-Value Store, Content Tracker und Versionskontrollsystem
    - Von zentral zu verteilt: Wie Git mit Repositories arbeitet
    - Snapshots statt Deltas – warum Git keine Diffs speichert

- **Git unter der Haube**
    - Interner Datenspeicher: Worktree, Staging Area, Commit Log
    - Objekttypen: blob, tree, commit
    - Hashes verstehen: Inhalte statt Dateien tracken

- **Grundlegende Kommandos**
    - `git init`, `add`, `commit`, `status`
    - Bedeutung der Staging Area
    - Tree- und Commit-Strukturen lesen
    - Konfiguration und globale Einstellungen

- **Branching & Referenzen**
    - Was Branches wirklich sind
    - `git branch`, `switch`, `HEAD`
    - Fast-Forward vs. Merge vs. Rebase – Szenarien und Unterschiede

- **Verteilte Arbeitsweise**
    - Lokale vs. Remote Repositories
    - `git fetch`, `push`, `pull` – was wirklich passiert
    - Bare Repositories und Synchronisation
    - Konflikte verstehen und vermeiden

- **Reset entzaubert**
    - `--soft`, `--mixed`, `--hard` im Vergleich
    - Wie Reset auf Worktree, Index und Commits wirkt
    - Sicheres Rückgängigmachen von Änderungen

- **Nützliche Tipps & Power Features**
    - Git-Aliase für produktiveres Arbeiten
    - Revisionen benennen (`HEAD~`, `HEAD^`, Hashes, Refs)
    - Worktrees
    - reflog
    - bisect