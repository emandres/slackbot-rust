extern crate serde_json as json;

use std::io;

fn url_verification(req: &json::Value) {
    println!("{}", req["challenge"].as_str().unwrap());
}

fn main() {
    let request: json::Value = json::from_reader(io::stdin()).unwrap();

    match request["type"].as_str() {
        Some("url_verification") => url_verification(&request),
        _ => {},
    }
}
