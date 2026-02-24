---
slug: "von-wordpress-zu-next-js-mit-claude-code"
title: "Von WordPress zu Next.js mit Claude Code"
excerpt: "Wie agentische KI-Entwicklung mit Claude Code es ermöglicht hat, eine starre WordPress-Site durch eine individuell programmierte, headless-CMS-fähige Next.js-Anwendung zu ersetzen – ohne vorherige Erfahrung mit React oder Next.js."
author: "Codevibe Team"
publishedAt: "2026-02-24"
coverImage: "/claude-code5.png"
tags: ["Claude Code", "Next.js", "KI-Entwicklung", "Agentisch", "WordPress"]
---

# Von WordPress zu Next.js – wie Claude Code uns ermächtigt hat

## Das Problem mit WordPress

Unsere alte Website lief auf WordPress. Das klingt zunächst harmlos – schließlich betreibt WordPress einen Großteil des Internets. Doch für ein Unternehmen wie Codevibe, das Softwareentwickler:innen trainiert und selbst einen hohen Anspruch an digitale Werkzeuge stellt, wurde WordPress zunehmend zum Hemmschuh.

Die Probleme lagen nicht an WordPress selbst, sondern an der Art, wie moderne KI-Tools mit klassischen CMS-Systemen zusammenspielen – oder eben nicht. Änderungen am Layout? Theme-Einschränkungen. Individuelle Interaktionen? Plugin-Sumpf. Und vor allem: Kein echter Code, den ein KI-Tool wie Claude Code hätte anfassen können. Stattdessen: PHP-Templates, proprietäre Hooks und eine Architektur, die für menschliche Klick-Interfaces gebaut wurde, nicht für KI-assistierte Entwicklung.

Das Fazit war klar: Wir wollten eine Website, die wir vollständig kontrollieren – und die wir mit modernen Werkzeugen auch wirklich weiterentwickeln können.

## Die Herausforderung: kein React, kein Next.js

Der Plan schien ambitioniert: Eine individuell programmierte Website auf Basis von **Next.js 15** mit App Router, **TypeScript**, **Tailwind CSS v4** und einer headless Content-Architektur.

Das Problem: Weder React noch Next.js gehörten zum unmittelbaren Erfahrungsschatz.

Hier kam Claude Code ins Spiel.

## Was ist agentische Entwicklung?

Ein KI-Werkzeug, das nicht nur einzelne Codezeilen vervollständigt, sondern **eigenständig im Kontext der gesamten Codebasis handelt**.

Claude Code ist kein Autocomplete-Tool. Es ist ein Agent, der:

- die gesamte Codebasis liest und versteht,
- eigenständig Dateien anlegt, bearbeitet und löscht,
- Build-Skripte ausführt und Fehler interpretiert,
- den Browser über Playwright steuert und prüft, ob das Ergebnis stimmt,
- und all das auf Basis natürlichsprachlicher Anweisungen tut.

Der Unterschied zu einem klassischen KI-Assistenten im Chat-Fenster ist erheblich: Während man dort Codeausschnitte einfügt, erklärt und wieder herauskopiert, arbeitet Claude Code **direkt im Projekt** – mit vollständigem Kontext, ohne Copy-Paste, mit unmittelbarem Feedback.

## Wie die Entwicklung tatsächlich ablief

Der Startpunkt war ein leeres `create-next-app`-Gerüst. Von dort an wurden Anforderungen in natürlicher Sprache beschrieben – auf Deutsch und Englisch – und Claude Code hat sie umgesetzt.

Ein Beispiel: Die [Kursseite](/seminare) sollte eine Volltextsuche über Titel, Beschreibung und Typ bieten, URL-Parameter für Deep Links unterstützen und in Echtzeit filtern – ohne Seitenneuladen. Claude Code hat erkannt, dass dafür ein Client Component mit `useSearchParams()` notwendig ist, einen `Suspense`-Wrapper drum herum gebaut (weil Next.js das für Client-seitige Navigation erfordert) und die gesamte Such- und Filterlogik mit `useMemo` optimiert.

Das alles ohne einen einzigen Satz Erklärung über diese Notwendigkeit – Claude Code hat es aus dem Kontext erschlossen.

## Was agentische Entwicklung wirklich bedeutet

Das Interessanteste an diesem Projekt war nicht die Technologie, die dabei entstanden ist. Es war die **Art zu arbeiten**, die sich verändert hat.

Man denkt in Anforderungen, nicht in Implementierungsdetails. Man beschreibt das *Was*, nicht das *Wie*. Claude Code übersetzt das in Code, der sich in die bestehende Architektur einfügt – konsistent im Stil, in der Benennung, im Typsystem.

Und das macht einfach Spaß! Es hat mich oft an meine erste Fahrt auf einem E-Bike erinnert, bei der
man das Lächeln nicht mehr aus dem Gesicht bekommt.

## Fazit

Die neue Codevibe-Website ist ein Beweis dafür, was agentische Entwicklung heute möglich macht: Eine vollständig individuell programmierte, typsichere, headless-CMS-fähige Webanwendung – entwickelt ohne React-Vorkenntnisse, in einem Bruchteil der Zeit, die klassische Entwicklung gebraucht hätte.

Wir leben in einer anderen Ära. Und es ist extrem relevant, diese im Detail kennenzulernen.

Beispielsweise mit unseren Kursen :)