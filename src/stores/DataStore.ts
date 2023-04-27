import { defineStore } from "pinia"
import type Person from "@/types/Person"

export const usePeopleStore = defineStore('people', {
    state: () => ({
        people: [] as Person[],
        isLoading: false
    }),
    actions: {
        async getData() {
            this.isLoading = true
            const response = await fetch('/data/example-data.json')
            const data = await response.json()
            
            this.people = data.data
            this.isLoading = false
        },
        deletePerson(id: string) {

            this.people.map((person: Person) => {
                if (person.data['ID'] === id) {
                    this.people = this.people.filter(person => person.data['ID'] !== id)
                } else {
                    if (person.children.has_nemesis) {
                        person.children.has_nemesis.records.map((child: Person) => {
                            if (child.data['ID'] === id) {
                                person.children.has_nemesis.records = person.children.has_nemesis.records.filter(child => child.data['ID'] !== id)
                            } else {
                                if (child.children.has_secrete) {
                                    child.children.has_secrete.records.map((grandChild: Person) => {
                                        if (grandChild.data['ID'] === id) {
                                            child.children.has_secrete.records = child.children.has_secrete.records.filter(grandChild => grandChild.data['ID'] !== id)
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
            
        }
    }
})