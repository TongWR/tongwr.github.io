let contacts = {
  "medium": "TongWR",
  "github": "TongWR",
  "linkedin": "TongWR",
  "twitter": "TongWRatanapan",
  "display": function() {
    let contacts = $("#contacts")

    let formattedLinkedIn = HTMLlinkedin.replace("%data%", contacts.linkedin)
    let formattedMedium = HTMLmedium.replace("%data%", contacts.medium)
    let formattedGitHub = HTMLgithub.replace("%data%", contacts.github)
    let formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter)

    contacts.after(formattedTwitter)
            .after(formattedLinkedIn)
            .after(formattedGitHub)
            .after(formattedMedium)
  }
}

$(function() {
  contacts.display()
})